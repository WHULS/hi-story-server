# Hi-Story Server `[v1.0.0]`

> Hi-Story 历史地图科普教学平台的后台服务系统，基于`Java(Maven)`

作者：`Kevin Lin [hayzlsls@whu.edu.cn]`

## 一、技术栈

- JDK 1.8.0_202
- JRE 1.8.0_202
- Maven 3.6.0

## 二、类与功能
### 2.1 MysqlConnector
- Mysql 数据库连接管理
- 执行 SQL 语句并返回结果

### 2.2 ImgCorsFilter/CorsFilter
- 为请求添加跨域头信息

### 2.3 OutputStreamServlet
- 处理文件获取请求

### 2.4 Server
- 处理各类请求，如：用户登录、数据查询、添加数据……
- 解析请求体

## 三、使用
- 构建 war 包
```shell
cd hi-story-server
mvn clean package
```