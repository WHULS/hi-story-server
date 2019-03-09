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

        // 分发请求信息
        if (pathArr[0] == "test") {
            for (int i = 0; i < 2; i++) {
                pathArr[i] = pathArr[i+1];
            }
        }
        String firstPath = pathArr[0];
        String secondPath = pathArr[1];
        String thirdPath = pathArr[2];

        
        // 获得参数信息
        JsonObject paramsObj;
        if (!thirdPath.equals("upload-file")) {
            JsonReader jsonReader = Json.createReader(request.getInputStream());
            paramsObj = jsonReader.readObject();
            jsonReader.close();
            System.out.println(paramsObj.toString());
        } else {
            paramsObj = Json.createObjectBuilder().add("type", "上传文件").build();
        }

        try {
            if (firstPath.equals("api")) {
                // 1. 用户 API
                if (secondPath.equals("user")) {
                    // 1.1. 用户登录
                    if (thirdPath.equals("login")) {
                        System.out.println("用户登录");
                        String account = paramsObj.getString("account");
                        String password = paramsObj.getString("password");

                        String sqlString = "SELECT * FROM user WHERE account=?";

                        try {
                            MysqlConnector conn = new MysqlConnector();
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
                                    response.setStatus(200);
                                }
                                // 账户密码错误
                                else {
                                    responseData.put("message", "账户[" + account + "]密码错误")
                                            .put("status", 403);
                                    response.setStatus(403);
                                    }
                            } else {
                                // 用户不存在
                                responseData.put("message", "用户[" + account + "]不存在")
                                        .put("status", 404);
                                response.setStatus(404);
                            }

                            // 发送 response
                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(responseData.toString());
                            responseWriter.flush();
                            responseWriter.close();
                            
                            conn.release();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        }
                    }
                    // 1.2. 用户注册
                    else if (thirdPath.equals("register")) {
                        System.out.println("用户注册");

                    }
                    // 1.3 保存作品
                    else if (thirdPath.equals("save-work")) {
                        System.out.println("保存作品");
                        String account = paramsObj.getString("account");
                        String content = paramsObj.getString("content");
                        String header = paramsObj.getString("header");

                        int is_public = 0; // 0：否，1：是
                        int star_num = 0;

                        String save_time = getCurrentTime();

                        String sqlString = "INSERT INTO user_work(user,header,content,save_time,is_public,star_num) VALUES(?,?,?,?,?,?)";
                       
                        try {
                            MysqlConnector conn = new MysqlConnector();
                            conn.executeSql(sqlString, new Object[]{account,header,content,save_time,is_public,star_num});
                            
                            JSONObject responseData = new JSONObject();
                            
                            responseData.put("message", "保存成功")
                                    .put("status", 200);
                            response.setStatus(200);

                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(responseData.toString());
                            responseWriter.flush();
                            responseWriter.close();

                            conn.release();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        }
                    }

                    // 1.4 获取单个作品
                    else if (thirdPath.equals("fetch-work")) {
                        System.out.println("获取单个作品");

                    }

                    // 1.5 修改作品内容
                    else if (thirdPath.equals("alter-work")) {
                        System.out.println("修改作品内容");

                    }
                    
                    // 1.6 为作品添加评论
                    else if (thirdPath.equals("add-comment")) {
                        System.out.println("添加评论");
                        int USER_WORK = paramsObj.getInt("USER_WORK");
                        String CONTENT = paramsObj.getString("CONTENT");
                        String TIME = getCurrentTime();
                        String COMMENT_USER = paramsObj.getString("COMMENT_USER");

                        String sqlString = "INSERT INTO user_comment(USER_WORK, CONTENT, TIME, COMMENT_USER, STAR_NUM) VALUES(?,?,?,?,?)";

                        try {
                            MysqlConnector conn = new MysqlConnector();
                            conn.executeSql(sqlString, new Object[]{USER_WORK,CONTENT,TIME,COMMENT_USER,0});
                            response.setStatus(200);
                            conn.release();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        }
                        
                    }

                    // 1.7 为评论添加回复
                    else if (thirdPath.equals("add-reply")) {
                        System.out.println("为评论添加回复");
                        int comment_id = paramsObj.getInt("comment_id");
                        String reply_time = paramsObj.getString("reply_time");
                        String reply_content = paramsObj.getString("reply_content");
                        String reply_user = paramsObj.getString("reply_user");
                        String replier = paramsObj.getString("replier");
                        
                        String sqlString = "INSERT INTO user_comment_reply(comment_id,reply_time,reply_content,reply_user,replier) VALUES(?,?,?,?,?);";

                        try {
                            MysqlConnector conn = new MysqlConnector();
                            conn.executeSql(sqlString, new Object[]{comment_id,reply_time,reply_content,reply_user,replier});
                            response.setStatus(200);
                            conn.release();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        }
                    }

                    // 1.8 获取评论
                    else if (thirdPath.equals("fetch-comment")) {
                        System.out.println("获取评论");
                        int USER_WORK = paramsObj.getInt("USER_WORK");
                        
                        String sqlString = "SELECT " +
                            "user_comment.ID, " +
                            "user_comment.USER_WORK, " +
                            "user_comment.CONTENT, " +
                            "user_comment.TIME, " +
                            "user_comment.COMMENT_USER, " +
                            "user_comment.STAR_NUM, " +
                            "`user`.user_name AS COMMENT_USER_NAME " +
                            "FROM " +
                            "user_comment " +
                            "INNER JOIN `user` ON `user`.account = user_comment.COMMENT_USER " +
                            "WHERE " +
                            "user_comment.USER_WORK = ?";

                        try {
                            MysqlConnector conn1 = new MysqlConnector();
                            conn1.executeSql(sqlString, new Object[]{USER_WORK});

                            ResultSet rs1 = conn1.getRs();

                            JSONArray responseData = new JSONArray();

                            // 1. 获取评论
                            while(rs1.next()) {
                                // 元胞数据
                                JSONObject metaData = new JSONObject();

                                // 字段
                                int comment_id = rs1.getInt("ID");
                                String work_id = rs1.getString("USER_WORK");
                                String CONTENT = rs1.getString("CONTENT");
                                String TIME = rs1.getString("TIME");
                                String COMMENT_USER = rs1.getString("COMMENT_USER");
                                int STAR_NUM = rs1.getInt("STAR_NUM");
                                String COMMENT_USER_NAME = rs1.getString("COMMENT_USER_NAME");

                                // 将评论数据存入数组
                                metaData.put("id", comment_id)
                                    .put("USER_WORK", work_id)
                                    .put("content", CONTENT)
                                    .put("date", TIME)
                                    .put("fromId", COMMENT_USER)
                                    .put("likeNum", STAR_NUM)
                                    .put("fromName", COMMENT_USER_NAME);
                                
                                // 2. 查询该评论的回复
                                MysqlConnector conn2 = new MysqlConnector();

                                String sqlString2 = "SELECT " + 
                                    "user_comment_reply.ID, " +
                                    "user_comment_reply.reply_time, " + 
                                    "user_comment_reply.reply_content, " + 
                                    "user_comment_reply.reply_user, " + 
                                    "user_comment_reply.replier, " + 
                                    "reply_user.user_name AS reply_user_name, " + 
                                    "replier.user_name AS replier_name " + 
                                    "FROM " +
                                    "user_comment_reply " + 
                                    "INNER JOIN `user` AS reply_user ON reply_user.account = user_comment_reply.reply_user " + 
                                    "INNER JOIN `user` AS replier ON replier.account = user_comment_reply.replier " + 
                                    "WHERE " +
                                    "user_comment_reply.comment_id = ?";
                                conn2.executeSql(sqlString2, new Object[]{comment_id});

                                ResultSet rs2 = conn2.getRs();

                                JSONArray replyArr = new JSONArray();
                                while (rs2.next()) {
                                    // 元胞数据
                                    JSONObject replyData = new JSONObject();

                                    // 字段内容
                                    int ID = rs2.getInt("ID");
                                    String reply_time = rs2.getString("reply_time");
                                    String reply_content = rs2.getString("reply_content");
                                    // 对谁回复
                                    String reply_user = rs2.getString("reply_user"); // toId
                                    String reply_user_name = rs2.getString("reply_user_name"); // toName
                                    // 发表回复的人
                                    String replier = rs2.getString("replier"); // fromId
                                    String replier_name = rs2.getString("replier_name"); // fromName
                                    
                                    replyData.put("id", ID)
                                        .put("date", reply_time)
                                        .put("content", reply_content)
                                        .put("toId", reply_user)
                                        .put("toName", reply_user_name)
                                        .put("fromId", replier)
                                        .put("fromName", replier_name);
                                        
                                    replyArr.put(replyData);
                                }
                                metaData.put("reply", replyArr);
                                
                                responseData.put(metaData);
                                conn2.release();
                            } // while (rs1.next())
                            conn1.release();

                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(responseData.toString());
                            responseWriter.flush();
                            responseWriter.close();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        }
                    }
                    else {
                        throw new ServletException("[警告]请求路径不存在");
                    }
                }
                // 2. 通用 API
                else if (secondPath.equals("common")) {
                    // 2.1 读取文件
                    if (thirdPath.equals("fetch-file")) {
                        System.out.println("读取文件");

                    }
                    // 2.2 上传文件
                    else if (thirdPath.equals("upload-file")) {
                        System.out.println("上传文件");
                    
                        // TODO: 获取用户信息
                        String user = "default";

                        // 获得磁盘文件条目工厂
                        DiskFileItemFactory factory = new DiskFileItemFactory();

                        // 获取服务器下的工程文件中image文件夹的路径
                        String path = request.getSession().getServletContext().getRealPath("/")+"img";
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
                                    String filePath = path + "\\" + filename;
                                    System.out.println("获取上传文件的总共的容量：" + item.getSize() + "文件名为：" + filePath);
                                    
                                    JSONObject responseData = new JSONObject();
                                    responseData.put("filePath", "img/" + filename);
                                    PrintWriter responseWriter = response.getWriter();
                                    responseWriter.println(responseData.toString());
                                    responseWriter.flush();
                                    responseWriter.close();

                                    //向数据库中写入文件路径
                                    // Image image = new Image();
                                    // image.setAddress("image/"+filename);
                                    // Images images = new Images();
                                    // //把文件名写到数据库中。<span style="font-family: Arial, Helvetica, sans-serif;">
                                    // images.updateImage(image);

                                    // in.read(buf) 每次读到的数据存放在 buf 数组中
                                    while ((length = in.read(buf)) != -1) {
                                        // 在 buf 数组中 取出数据 写到 （输出流）磁盘上
                                        out.write(buf, 0, length);
                                    }
                                    // 删除临时文件
                                    item.delete();

                                    in.close();
                                    out.close();
                                }
                            }

                        } catch (FileUploadException e) {
                            e.printStackTrace();
                        }
                    }

                    // 2.3 获取所有作品
                    else if (thirdPath.equals("fetch-all-work")) {
                        System.out.println("获取所有作品");
                        String sqlString = "SELECT " +
                            "user_work.id," +
                            "user_work.`user` AS account," +
                            "`user`.user_name AS `name`," +
                            "user_work.header," +
                            "user_work.content," +
                            "user_work.save_time," +
                            "user_work.star_num," +
                            "user_work.is_public " +
                            "FROM " +
                            "user_work " +
                            "INNER JOIN `user` ON user_work.`user` = `user`.account;";
                        try {
                            MysqlConnector conn = new MysqlConnector();
                            conn.executeSql(sqlString);

                            ResultSet rs = conn.getRs();

                            JSONArray responseData = new JSONArray();
                            while(rs.next()) {
                                int id = rs.getInt("id");
                                String account = rs.getString("account");
                                String name = rs.getString("name");
                                String header = rs.getString("header");
                                String content = rs.getString("content");
                                String save_time = rs.getString("save_time");
                                int star_num = rs.getInt("star_num");
                                int is_public = rs.getInt("is_public");
                                
                                responseData.put(
                                    new JSONObject().put("id", id)
                                    .put("account", account)
                                    .put("name", name)
                                    .put("header", header)
                                    .put("content", content)
                                    .put("save_time", save_time)
                                    .put("star_num", star_num)
                                    .put("is_public", is_public)
                                );

                            }
                            
                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(responseData.toString());
                            responseWriter.flush();
                            responseWriter.close();

                            conn.release();
                        } catch (SQLException e) {
                            System.out.println("[警告]" + e.getMessage());
                        }
                    } else {
                        throw new ServletException("[警告]请求路径不存在");
                    }
                }
                // 3. 数据 API
                else if (secondPath.equals("data")) {
                    // 3.1 查询人物事件
                    if (thirdPath.equals("events")) {
                        System.out.println("查询事件");
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

                        try {
                            MysqlConnector conn = new MysqlConnector();

                            conn.executeSql(sqlString, new Object[]{personName});

                            ResultSet rs = conn.getRs();

                            JSONArray responseData = new JSONArray();
                            while (rs.next()) {
                                String Lon = rs.getString("LON");
                                String Lat = rs.getString("LAT");
                                String Year = rs.getString("YEAR");
                                String Event = rs.getString("EVENT");
                                String Ancient_Place = rs.getString("ANCIENT_PLACE");
                                String Modern_Place = rs.getString("MODERN_PLACE");
                                String Person_Name = rs.getString("NAME");

                                responseData.put(
                                    new JSONObject().put("Lon",Lon)
                                        .put("Lat",Lat)
                                        .put("Year",Year)
                                        .put("Event",Event)
                                        .put("Ancient_Place",Ancient_Place)
                                        .put("Modern_Place",Modern_Place)
                                        .put("Person_Name",Person_Name)
                                );
                            }

                            PrintWriter responseWriter = response.getWriter();
                            responseWriter.println(responseData.toString());
                            responseWriter.flush();
                            responseWriter.close();

                            conn.release();
                        } catch (SQLException ex) {
                            System.out.println("[警告]" + ex);
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
    private static void printTime() {
        // 设置日期格式
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 输出当前系统时间
        System.out.print(df.format(new Date()));
    }

    /**
     * 获得当前时间
     */
    private static String getCurrentTime() {
        // 设置日期格式
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 输出当前系统时间
        return df.format(new Date());
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