package com.qianmo.history;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.*;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Stack;
import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonReader;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Server extends HttpServlet{
    private static final long serialVersionUID = 1L;

    public Server() {
        super();
    }

    // [Get 请求访问页面] doGet方法处理GET类型的请求
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request, response);
    }

    // [Post 请求处理数据] doPost处理POST类型的请求
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        request.setCharacterEncoding("UTF-8");
        response.setContentType("application/json; charset=utf-8");

        // 解析 request 获取请求信息
        String[] pathArr = parseRequest(request);
        for (String path : pathArr) {
            System.out.println(path);
        }

        // 获得参数信息
        JsonReader jsonReader = Json.createReader(request.getInputStream());
        JsonObject paramsObj = jsonReader.readObject();
        jsonReader.close();
        System.out.println(paramsObj.toString());

        // TODO: 分发请求信息
        if (pathArr[0] == "test") {
            for (int i = 0; i < 2; i++) {
                pathArr[i] = pathArr[i+1];
            }
        }
        String firstPath = pathArr[0];
        String secondPath = pathArr[1];
        String thirdPath = pathArr[2];

        try {
            if (firstPath.equals("api")) {
                // 1. 用户 API
                if (secondPath.equals("user")) {
                    // 1.1. 用户登录
                    if (thirdPath.equals("login")) {
                        String account = paramsObj.getString("account");
                        String password = paramsObj.getString("password");

                        String sqlString = "SELECT * FROM user WHERE account=?";

                        MysqlConnector conn = new MysqlConnector();
                        try {
                            // SQL 执行语句
                            conn.executeSql(sqlString, new String[]{account});

                            // 结果集
                            ResultSet rs = conn.getRs();

                            JSONObject responseData = new JSONObject();
                            if (rs.next()) {
                                // 密码正确
                                if (rs.getString("password").equals(password)) {
                                    responseData.put("message", "登录成功")
                                            .put("name", rs.getString("user_name"))
                                            .put("status", 200);
                                }
                                // 账户密码错误
                                else {
                                    responseData.put("message", "账户[" + account + "]密码错误")
                                            .put("status", 403);
                                }
                            } else {
                                // 用户不存在
                                responseData.put("message", "用户[" + account + "]不存在")
                                        .put("status", 404);
                            }

                            // 发送 response
                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(responseData.toString());
                            responseWriter.flush();
                            responseWriter.close();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        } finally {
                            conn.release();
                        }
                    }
                    // 1.2. 用户注册
                    else if (thirdPath.equals("register")) {

                    }
                    // 1.3 保存作品
                    else if (thirdPath.equals("save-work")) {

                    }

                    // 1.4 获取单个作品
                    else if (thirdPath.equals("fetch-work")) {

                    }

                    // 1.5 修改作品内容
                    else if (thirdPath.equals("alter-work")) {

                    } else {
                        throw new ServletException("[警告]请求路径不存在");
                    }
                }
                // 2. 通用 API
                else if (secondPath.equals("common")) {
                    // 2.1 读取文件
                    if (thirdPath.equals("fetch-file")) {

                    }
                    // 2.2 上传文件
                    else if (thirdPath.equals("upload-file")) {
                        {
                            // 获取用户信息
                            String user = request.getParameter("userId");

                            // 获得磁盘文件条目工厂
                            DiskFileItemFactory factory = new DiskFileItemFactory();

                            // 获取服务器下的工程文件中image文件夹的路径
                            String path;
                            if (user != null) {
                                path = "C:/upload/images/" + user;
                            } else {
                                path = "C:/upload/images/default";
                            }
                            System.out.println("文件保存路径：" + path);

                            /*
                             * 限制文件大小
                             */
                            factory.setRepository(new File(path));
                            // 设置 缓存的大小，当上传文件的容量超过该缓存时，直接放到 暂时存储室
                            factory.setSizeThreshold(1024 * 1024);


                            // 高水平的API文件上传处理
                            ServletFileUpload upload = new ServletFileUpload(factory);
                            try {
                                // 可以上传多个文件
                                List<FileItem> list = upload.parseRequest(request);

                                for (FileItem item : list) {
                                    // 获取表单的属性名字
                                    String name = item.getFieldName();

                                    // 如果获取的 表单信息是普通的 文本 信息
                                    if (item.isFormField()) {
                                        // 获取用户具体输入的字符串，因为表单提交过来的是 字符串类型的
                                        String value = item.getString();

                                        request.setAttribute(name, value);
                                    }
                                    // 对传入的非 简单的字符串进行处理 ，比如说二进制的 图片，电影这些
                                    else {
                                        /*
                                         * 以下三步，主要获取 上传文件的名字
                                         */
                                        // 获取路径名
                                        String value = item.getName();

                                        // 索引到最后一个反斜杠
                                        int start = value.lastIndexOf("/");

                                        // 截取上传文件的 字符串名字，加1是去掉反斜杠，
                                        String filename = value.substring(start + 1);
                                        request.setAttribute(name, filename);

                                        // 真正写到磁盘上
                                        OutputStream out = new FileOutputStream(new File(path, filename));
                                        InputStream in = item.getInputStream();

                                        int length;
                                        byte[] buf = new byte[1024];
                                        System.out.println("获取上传文件的总共的容量：" + item.getSize() + "文件名为：" + path + "\\" + filename);

                                        //向数据库中写入文件路径
//                    Image image = new Image();
//                    image.setAddress("image/"+filename);
//                    Images images = new Images();
//                    //把文件名写到数据库中。<span style="font-family: Arial, Helvetica, sans-serif;">
//                    images.updateImage(image);

                                        // in.read(buf) 每次读到的数据存放在 buf 数组中
                                        while ((length = in.read(buf)) != -1) {
                                            // 在 buf 数组中 取出数据 写到 （输出流）磁盘上
                                            out.write(buf, 0, length);
                                        }
                                        in.close();
                                        out.close();

                                        // 删除临时文件
                                        item.delete();
                                    }
                                }

                            } catch (FileUploadException e) {
                                // TODO Auto-generated catch block
                                e.printStackTrace();
                            }
//        List<Image> imageList = getImage();
//        request.setAttribute("imageList", imageList);
                            request.getRequestDispatcher("/map").forward(request, response);
                        }
                    }

                    // 2.3 获取所有作品
                    else if (thirdPath.equals("fetch-all-work")) {

                    } else {
                        throw new ServletException("[警告]请求路径不存在");
                    }
                }
                // 3. 数据 API
                else if (secondPath.equals("data")) {
                    // 3.1 查询人物事件
                    if (thirdPath.equals("events")) {
                        String personName = paramsObj.getString("name");

                        String sqlString = "SELECT\n" +
                                "\tLON,\n" +
                                "\tLAT,\n" +
                                "\t`YEAR`,\n" +
                                "\t`EVENT`,\n" +
                                "\tANCIENT_PLACE,\n" +
                                "\tMODERN_PLACE,\n" +
                                "\tperson.`NAME` \n" +
                                "FROM\n" +
                                "\t`events`\n" +
                                "\tINNER JOIN person \n" +
                                "WHERE\n" +
                                "\t`person`.`NAME` = ? \n" +
                                "\tAND `events`.PERSON_ID = person.PERSON_ID \n" +
                                "\tAND `events`.LON IS NOT NULL;";

                        MysqlConnector conn = new MysqlConnector();

                        try {
                            conn.executeSql(sqlString, new Object[]{personName});

                            ResultSet rs = conn.getRs();

                            JSONObject responseData = new JSONObject();
                            JSONArray dataArr = new JSONArray();
                            while (rs.next()) {
                                double Lon = rs.getDouble("LON");
                                double Lat = rs.getDouble("LAT");
                                String Year = rs.getString("YEAR");
                                String Event = rs.getString("EVENT");
                                String Ancient_Place = rs.getString("ANCIENT_PLACE");
                                String Modern_Place = rs.getString("MODERN_PLACE");
                                String Person_Name = rs.getString("NAME");

                                dataArr.put(
                                    new JSONObject().put("Lon",Lon)
                                        .put("Lat",Lat)
                                        .put("Year",Year)
                                        .put("Event",Event)
                                        .put("Ancient_Place",Ancient_Place)
                                        .put("Modern_Place",Modern_Place)
                                        .put("Person_Name",Person_Name)
                                );
                            }

                            responseData.put("data", dataArr);

                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(dataArr.toString());
                            responseWriter.flush();
                            responseWriter.close();
                        } catch (SQLException ex) {
                            System.out.println("[警告]" + ex);
                        } finally {
                            conn.release();
                        }
                    }
                } else {
                    throw new ServletException("[警告]请求路径不存在");
                }
            } else {
                throw new ServletException("[警告]请求路径不存在");
            }
        } catch (IOException err) {
            System.out.println("[警告]" + err.getMessage());
        }
    }


    /**
     * 输出时间
     */
    private void printTime() {
        // 设置日期格式
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 输出当前系统时间
        System.out.print(df.format(new Date()));
    }

    /**
     * 解析请求，包括输出uri，请求体等
     * @param request
     * @throws SecurityException
     * @throws IOException
     */
    private String[] parseRequest(HttpServletRequest request) throws SecurityException, IOException {
        // 获取请求地址
        String uri = request.getRequestURI();

        // 打印时间和请求地址
        printTime();
        System.out.println(" - " + uri);

        // 利用堆栈获取 path 层级
        Stack<String> pathArr = new Stack<>();
        for (String i : uri.split("/")) {
            if (!i.equals("")) pathArr.push(i);
        }

        // 将堆栈转换为 String 数组
        Object[] outObjectArr = pathArr.toArray();
        int pathLength = outObjectArr.length;
        String[] outStringArr = new String[pathLength];
        for (int i=0; i<pathLength; i++) {
            outStringArr[i] = outObjectArr[i].toString();
        }

        // 返回字符串数组
        return outStringArr;
    }
}