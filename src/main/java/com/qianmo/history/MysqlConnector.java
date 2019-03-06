package com.qianmo.history;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.ResultSet;
import java.util.Stack;

public class MysqlConnector{

    public static void main(String[] args) {
//        MysqlConnector conn = new MysqlConnector();

//        conn.executeSql("INSERT INTO user(account, user_name, password) VALUES('03030304', '林杉', '123456')");
    }
    // 1. 属性
    private Connection conn; // 1.1
    private Statement stmt;  // 1.2
    private ResultSet rs;    // 1.3

    // 2. 设置属性的方法

    /**
     * 2.1
     * @param stmt Statement
     */
    public void setStmt(Statement stmt) {
        this.stmt = stmt;
    }

    /**
     * 2.2 设置连接
     * @param conn Connection
     */
    public void setConn(Connection conn) {
        this.conn = conn;
    }

    /**
     * 2.3 设置连接（带参数）
     * @param dataBaseUrl：数据库地址
     * @param user：用户名
     * @param password：密码
     */
    public void setConn(String dataBaseUrl, String user, String password) {
        Connection newConn;
        Statement newStmt;
        try {
            // 从驱动中获取连接
            newConn = DriverManager.getConnection("jdbc:mysql://" + dataBaseUrl +
                    "?user=" + user + "&password=" + password + "&serverTimezone=GMT%2B8");
            newStmt = newConn.createStatement();

            setConn(newConn);
            setStmt(newStmt);
        } catch (SQLException ex) {
            // handle the error
            System.out.println("SQLException: " + ex.getMessage());
            System.out.println("SQLState: " + ex.getSQLState());
            System.out.println("VendorError: " + ex.getErrorCode());
        }
    }

    /**
     * 2.4
     * @param rs ResultSet
     */
    public void setRs(ResultSet rs) {
        this.rs = rs;
    }

    // 3. 获取属性的方法

    /**
     * 3.1
     * @return Connection
     */
    public Connection getConn() {
        return conn;
    }

    /**
     * 3.2
     * @return Statement
     */
    public Statement getStmt() {
        return stmt;
    }

    /**
     * 3.3
     * @return ResultSet
     */
    public ResultSet getRs() {
        return rs;
    }

    // 4. 构造函数和销毁函数
    /**
     * 4.1 默认构造函数
     */
    public MysqlConnector() {
        // 1. Register MySQL Connector/J
        try {
            Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        }catch (Exception ex) {
            // handle the error
            System.out.println(ex.toString());
        }

        // 2. Obtain a Connection instance from the DriverManager
        // 默认数据库和用户
        String dataBaseUrl = "localhost:3306/hisinfo";
        String user = "root";
        String password = "root";

        setConn(dataBaseUrl, user, password);
    }

    /**
     * 4.2 带数据库属性的构造函数
     * @param dataBaseUrl：数据库地址
     * @param user：用户名
     * @param password：密码
     */
    public MysqlConnector(String dataBaseUrl, String user, String password) {
        // 1. Register MySQL Connector/J
        try {
            Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
        }catch (Exception ex) {
            // handle the error
            System.out.println(ex.toString());
        }

        setConn(dataBaseUrl, user, password);
    }

    /**
     * 销毁函数
     */
    public void destory() {
        release();
    }

    // 5. 其他方法
    /**
     * 5.1 执行 SQL 语句
     * @param sqlString：SQL 语句
     */
    public void executeSql(String sqlString) {
        try {
            if (getStmt().execute(sqlString)) {
                setRs(getStmt().getResultSet());
            }
        } catch (SQLException ex) {
            System.out.println(ex.toString());
        }
    }

    public void executeSql(String sqlString, Object[] params) throws SQLException {
        String[] dividedSql = sqlString.split("\\?");

        String newSqlString = "";

        // 最后一个字符是问号
        if (sqlString.charAt(sqlString.length()-1) == '?') {

            if (dividedSql.length != params.length) throw new SQLException("参数不匹配");

            for (int i=0; i<dividedSql.length; i++) {
                newSqlString += (dividedSql[i] + "\'" + params[i] + "\'");
            }

        }
        // 最后一个字符不是问号
        else {

            if (dividedSql.length-1 != params.length) throw new SQLException("参数不匹配");

            for (int i=0; i<dividedSql.length -1; i++) {
                newSqlString += (dividedSql[i] + "\'" + params[i] + "\'");
            }
            newSqlString += dividedSql[dividedSql.length-1];

        }

        executeSql(newSqlString);
    }

    /**
     * 5.2 清空连接信息
     */
    public void release() {

        if (getRs() != null) {
            try {
                getRs().close();
            } catch (SQLException sqlEx) {
                System.out.println(sqlEx.toString());
            }

            setRs(null);
        }

        if (getStmt() != null) {
            try {
                getStmt().close();
            } catch (SQLException sqlEx) {
                System.out.println(sqlEx.toString());
            }

            setStmt(null);
        }
    }
}
