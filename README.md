# Hi-Story Server `[v1.0.0]`

[Hi-Story](https://github.com/WHULS/hi-story)是基于Maven webapp的历史地图科普教学平台。[Hi-Story Server](https://github.com/WHULS/hi-story-server)集成了其单页应用和服务端代码，并提供了打包部署的方法。

作者：`Kevin Lin [hayzlsls@whu.edu.cn]`

# 1. 使用

## 1.1 软件环境
- Tomcat 6.0 +
- JavaSE 8 +

## 1.2 一般部署方法
通过 Maven 构建 war 包，将 war 包交由 Tomcat 解析并部署。
1. 构建 war 包（如：hi-story.war），命令行输入：
```shell
$ cd hi-story-server
$ mvn clean package
```

2. 配置Tomcat的部署端口（默认`80`端口，[参考](https://blog.csdn.net/lengdaochuqiao/article/details/54881855)）
3. 将 hi-story.war 拷贝至 Tomcat 的 webapps 文件夹下
4. 打开浏览器，通过 `localhost/hi-story` 访问项目

## 1.3 补充
### 1.3.1 如何利用 IntelliJ IDEA 构建 war 包？
- 在 Intellij IDEA 中打开项目
- 在 Maven 窗口中先双击 `clean`，再双击 `package`
- 若无报错，在项目文件夹的 `target` 中得到 war 包

### 1.3.2 如何修改 war 包的文件名？
- 打开 `pom.xml`
- 在`<build>`标签下的`<fileName>`中修改文件名
```xml
<build>
    <finalName>hi-story</finalName>
    ...
</build>
```

### 1.3.3 如何构建 jar 包？
- 打开 `pom.xml`
- 将`<packaging>war</packaging>`改成`<packaging>jar</packaging>`
- 命令行输入
```shell
$ cd hi-story-server
$ mvn clean package
```

# 2. 项目介绍
## 2.1 内容简介
Hi-Story 的前端代码位于 `src/webapp` 中，是一个完整的基于`Vue2.5`的单页应用。服务响应的代码位于 `src/main/java/com/qianmo/history` 中。

## 2.2 项目地址
http://47.107.126.123/


# 3. 类描述
## 3.1 MysqlConnector
- Mysql 数据库连接管理
- 执行 SQL 语句并返回结果

## 3.2 ImgCorsFilter/CorsFilter
- 为请求添加跨域头信息

## 3.3 OutputStreamServlet
- 处理文件获取请求

## 3.4 Server
- 处理各类请求，如：用户登录、数据查询、添加数据……
- 解析请求体

# 4. 安全控制
- 防SQL注入