package com.qianmo.history;

import org.json.JSONArray;
import org.json.JSONObject;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonWriter;
import javax.xml.transform.Result;
import java.io.OutputStream;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Stack;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class testMysql {
    public static void main(String[] args) {
        // testLogin();
        testUpdata();
        // testQueryEvent();
    }

    public static void testQueryEvent() {
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
            conn.executeSql(sqlString, new Object[]{"李清照"});

            ResultSet rs = conn.getRs();

            JSONArray responseData = new JSONArray();
            while (rs.next()) {
                double Lon = rs.getDouble("LON");
                double Lat = rs.getDouble("LAT");
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

            conn.release();
            System.out.println(responseData.toString());
        } catch (SQLException ex) {
            System.out.println(ex);
        }
    }

    private static void testLogin() {

        String account = "03030303";

        String password = "123456";

        String sqlString = "SELECT * FROM user WHERE account=?";

        try {
            MysqlConnector conn = new MysqlConnector();
            // SQL 执行语句
            conn.executeSql(sqlString, new String[]{account});

            // 结果集
            ResultSet rs = conn.getRs();

            JsonObject responseData;
            if (rs.next()) {
                // 密码正确
                if (rs.getString("password").equals(password)) {
                    responseData = Json.createObjectBuilder()
                            .add("message", "登录成功")
                            .build();
                }
                // 账户密码错误
                else {
                    responseData = Json.createObjectBuilder()
                            .add("message", "账户[" + account + "]密码错误")
                            .build();
                }
            } else {
                // 用户不存在
                responseData = Json.createObjectBuilder()
                        .add("message", "用户[" + account + "]不存在")
                        .build();
            }
            System.out.println(responseData.toString());

            conn.release();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }

    private static void testUpdata() {

        try {
            MysqlConnector conn = new MysqlConnector();

            conn.executeSql("SELECT * FROM events");

            ResultSet rs = conn.getRs();

            while (rs.next()) {
                String LONLAT = rs.getString("LONLAT");
                int id = rs.getInt("ID");

                // System.out.println(lonLat != null);

                if (LONLAT != null) {
                    double[] LonLat = parseLonLat(LONLAT);

                    System.out.println(LonLat[0] + "," + LonLat[1]);

                    // String ancientPlace = placeString.split("（")[0];
                    String sqlString = "UPDATE events SET LON=?,LAT=? WHERE ID=?";
                    MysqlConnector newConn = new MysqlConnector();
                    newConn.executeSql(sqlString, new Object[]{LonLat[0], LonLat[1], id});
                    newConn.release();
                }
            }

            conn.release();
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } 
    }

    private static double[] parseLonLat(String s) {
        String regEx="[^0-9]";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(s);
        String[] ss =  m.replaceAll(" ").split(" ");
        double num1=0, num2=0;
        num1 = (double)Integer.parseInt(ss[1]) + (double)Integer.parseInt(ss[2])/100;
        num2 = (double)Integer.parseInt(ss[5]) + (double)Integer.parseInt(ss[6])/100;

        return new double[]{num1, num2};
    }

    private static int parstInt(String s) {
        String regEx="[^0-9]";
        Pattern p = Pattern.compile(regEx);
        Matcher m = p.matcher(s);
        return Integer.parseInt(m.replaceAll("").trim());
    }
}
