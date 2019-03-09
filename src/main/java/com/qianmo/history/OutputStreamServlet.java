package com.qianmo.history;
 
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
 
import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
 
public class OutputStreamServlet extends HttpServlet {
 
	private static final long serialVersionUID = 1L;
	
	public void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		// 1. 用response获取outputstream
		ServletOutputStream output = response.getOutputStream();

		String uri = request.getRequestURI();
		// String imageName = uri.split("/")[2];
		String imageName = uri;
		System.out.println("获取[" + imageName + "]");
		
		// 2. 获取inputstream
		// 通过相对路径来获取绝对路径
		String imagrealPath = this.getServletContext().getRealPath(imageName);
		System.out.println(imagrealPath);

		InputStream in = new FileInputStream(imagrealPath);
		int len = 0;
		byte[] buffer = new byte[1024];
		while((len = in.read(buffer))>0) {
			output.write(buffer,0, len);
		}
		in.close();
		output.close();
	}
 
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}
}
