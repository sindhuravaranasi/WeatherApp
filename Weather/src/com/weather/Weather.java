package com.weather;

//import java.io.Serializable;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Weather  {
	
	/**
	 * 
	 */
	//private static final long serialVersionUID = 1L;
	@XmlElement public String DATE;
	@XmlElement public double TMAX;
	@XmlElement public double TMIN;
	
	public Weather()
	{
		
	}
	
	public Weather(String DATE, double TMAX, double TMIN)
	{
		this.DATE=DATE;
		this.TMAX=TMAX;
		this.TMIN=TMIN;
	}
	

}
