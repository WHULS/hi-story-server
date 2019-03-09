package com.qianmo.history;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;

public class TestJson {
    public static void main(String[] args) {
        // JSONArray jsonArray = new JSONArray();
        // jsonArray.put(new JSONObject().put("AAA", "aa"));

        System.out.println(getCurrentTime());
    }

    private static String getCurrentTime() {
        // 设置日期格式
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

        // 输出当前系统时间
        return df.format(new Date());
    }
}
