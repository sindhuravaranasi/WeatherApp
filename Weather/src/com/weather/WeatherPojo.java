package com.weather;

//import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class WeatherPojo {
	

	//private static final long serialVersionUID = 1L;
	@XmlElement public String DATE;
	
	public WeatherPojo()
	{
		
	}
	
	public WeatherPojo(String DATE)
	{
		this.DATE=DATE;
	}
	
	

}
