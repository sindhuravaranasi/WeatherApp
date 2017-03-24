package com.weather;

import java.sql.*;

public class DbUtil {

	public Connection getConnection() throws Exception {
		// TODO Auto-generated method stub
		try
		{
			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/weather","root","password");
			return con;
			
		}
		catch(Exception e)
		{
			throw e;
		}
		

	}

}
