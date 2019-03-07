package com.qianmo.history;


import org.json.JSONArray;
import org.json.JSONObject;

public class TestJson {
    public static void main(String[] args) {
        JSONArray jsonArray = new JSONArray();
        jsonArray.put(new JSONObject().put("AAA", "aa"));

        System.out.println(jsonArray.toString());
    }
}
