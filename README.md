# Hi-Story Server `[v1.0.0]`

> [Hi-Story](https://github.com/WHULS/hi-story)是基于Maven webapp的历史地图科普教学平台。[Hi-Story Server](https://github.com/WHULS/hi-story-server)是该webapp的服务端系统。

作者：`Kevin Lin [hayzlsls@whu.edu.cn]`

# 1. 使用
## 1.1 开发环境
- Maven

## 1.2 部署环境
- Tomcat
- JavaSE 8+

## 1.3 一般部署方法
通过 Maven 构建 war 包，将 war 包交由 Tomcat 解析并部署。
1. 构建 war 包（如：hi-story.war），命令行输入：
```shell
$ cd hi-story-server
$ mvn clean package
```

2. 配置Tomcat的部署端口（默认`80`端口，[参考](https://blog.csdn.net/lengdaochuqiao/article/details/54881855)）
3. 将 hi-story.war 拷贝至 Tomcat 的 webapps 文件夹下
4. 打开浏览器，通过 `localhost/hi-story` 访问项目

## 1.4 补充
### 1.4.1 利用 IntelliJ IDEA 构建 war 包
- 在 Intellij IDEA 中打开项目
- 在 Maven 窗口中先双击 `clean`，再双击 `package`
- 若无报错，在项目文件夹的 `target` 中得到 war 包

### 1.4.2 修改 war 包的文件名
- 打开 `pom.xml`
- 在`<build>`标签下的`<fileName>`中修改文件名
```xml
<build>
    <finalName>hi-story</finalName>
    ...
</build>
```

### 1.4.3 构建 jar 包
- 打开 `pom.xml`
- 将`<packaging>war</packaging>`改成`<packaging>jar</packaging>`
- 命令行输入
```shell
$ cd hi-story-server
$ mvn clean package
```

# 2. 项目地址
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

# 4. 参考链接
1. <A HREF="https://blog.csdn.net/u011217058/article/details/79490551">06.用maven自带的tomcat插件启动一个maven项目 - 摩尔__摩尔的博客 - CSDN博客</A>
2. <A HREF="https://www.cnblogs.com/Knowledge-has-no-limit/p/7240585.html">使用IntelliJ IDEA配置Tomcat（入门） - 深海里的鱼 - 博客园</A>
3. <A HREF="https://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServletRequest.html">HttpServletRequest (Java EE 6 )</A>
4. <A HREF="https://docs.oracle.com/javaee/6/api/javax/servlet/http/HttpServletResponse.html">HttpServletResponse (Java EE 6 )</A>
5. <A HREF="https://blog.csdn.net/gisredevelopment/article/details/49078749">Idea中Tomcat启动时日志乱码 - UP-GIS - CSDN博客</A>
6. <A HREF="https://www.jianshu.com/p/cd2b02ce9bee">Java Web之Filter - 简书</A>
7. <A HREF="https://docs.oracle.com/javaee/7/api/javax/json/JsonObject.html">JsonObject (Java(TM) EE 7 Specification APIs)</A>
8. <A HREF="https://docs.oracle.com/javaee/7/api/javax/json/JsonWriter.html">JsonWriter (Java(TM) EE 7 Specification APIs)</A>
9. <A HREF="https://mvnrepository.com/">Maven Repository: Search/Browse/Explore</A>
10. <A HREF="https://blog.csdn.net/lovefenglinshi/article/details/41747577">servlet图片上传 - 晨曦的专栏 - CSDN博客</A>
11. <A HREF="https://docs.oracle.com/javaee/6/api/javax/servlet/ServletRequest.html">ServletRequest (Java EE 6 )</A>
12. <A HREF="https://docs.oracle.com/javaee/6/api/javax/servlet/ServletResponse.html">ServletResponse (Java EE 6 )</A>
13. <A HREF="https://blog.csdn.net/zouqingfang/article/details/50502792">Spring MVC +Mybatis + Maven 配置之web.xml配置 - 清风徐来，水波不兴 - CSDN博客</A>
14. <A HREF="https://blog.csdn.net/tyt_XiaoTao/article/details/82682964">tomcat运行war包，生成的文件中文乱码 - 小涛的胡思乱想 - CSDN博客</A>
