package com.qianmo.history;

import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonWriter;
import javax.xml.transform.Result;
import java.io.OutputStream;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Stack;

public class testMysql {
    public static void main(String[] args) {
        testLogin();
    }

    private static void testLogin() {

        String account = "03030303";

        String password = "123456";

        String sqlString = "SELECT * FROM user WHERE account=?";

        MysqlConnector conn = new MysqlConnector();
        try {
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
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        }
    }
}
