function jq()
{

$(document).ready(function(){
	
    $("button").click(function(){
    	var date1=document.getElementById("dv").value;
    	var date1=document.getElementById("dv").value;
    	var formattedDate = new Date(date1);
    	
    	formattedDate.setDate(formattedDate.getDate()+1);
    	console.log(formattedDate);
    	
    	if(!(formattedDate instanceof Date && !isNaN(formattedDate.valueOf())))
    	{

    	 $("#demo").html("<h1 style='color:red'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter a valid Date");
    	return(false);
    	}
    	if(!(formattedDate.getFullYear() < 2025 && formattedDate.getFullYear()>=2013))
    	{
    	 $("#demo").html("<h2 style='color:red'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter a valid Date before 2025 and after 2013");
    		return(false);
    	}
    //	if(formattedDate < presentDate)
    //	{
    	// $("#demo").html("<h2 style='color:red'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Enter a Date after 2013 ");
    	//return(false);
    	//}
    	else
    		{
    	     	
     	var d1=[];
     	var TMAX=[];
     	var TMIN=[];
     	for(var i=1;i<=6;i++)
     	{
     		
        	var formattedDate = new Date(date1);
         	formattedDate.setDate(formattedDate.getDate()+i);
         	console.log(formattedDate);        	
         	
         	
         	var d = formattedDate.getDate();
         	//console.log(d);
         	var m =  formattedDate.getMonth();
         	m += 1;  // JavaScript months are 0-1
         	var y = formattedDate.getFullYear();
     		date = y + "" + (m>9 ? '' : '0') + m + "" + (d>9 ? '' : '0') + d;
     		console.log(date);
     		$.ajax
     		({
     			type:"GET",
     			dataType:"json",
     			async:true,
     			url:"http://localhost:8080/Weather/rest/api/forecastweather/"+date,
     			success:function(data)
     			{ 
     				//console.log(data);
     				d1.push(data.DATE);
     				TMAX.push(data.TMAX);
     				TMIN.push(data.TMIN);
     				console.log(d1);
     	    		console.log(TMAX);
     	    		console.log(TMIN);
     	    		/* var myChart = Highcharts.chart('container', {
     	     	        chart: {
     	     	            type: 'bar'
     	     	        },
     	     	        title: {
     	     	            text: 'Temperature vs Dates'
     	     	        },
     	     	      xAxis: {
     	     	    	   title:
     	     	    		   {
     	     	    		   text:'Dates'
     	     	    		   }
     	     	        },
     	     	      xAxis: {
     	                 categories: d1
     	             },
     	     	        series:{
     	     	        	//name:'DATE',
     	     	        	data:d1
     	     	        },
     	     	        yAxis: {
     	     	            title: {
     	     	                text: 'Temperatures'
     	     	            }
     	     	        },
     	     	        series: [{
     	     	            name: 'TMAX',
     	     	            data: TMAX
     	     	        }, {
     	     	            name: 'TMIN',
     	     	            data: TMIN
     	     	        }]
     	     	    });*/
     	    		Highcharts.chart('container', {
         			    chart: {
         			        type: 'line'
         			    },
         			    title: {
         			        text: 'Temperatures in Cincinnati'
         			    },
         			    subtitle: {
         			        text: 'Source: REST Call to Weather Forecast'
         			    },
         			    xAxis: {
         			        categories: d1
         			    },
         			    yAxis: {
         			        title: {
         			            text: 'Temperature (°F)'
         			        }
         			    },
         			    plotOptions: {
         			        line: {
         			            dataLabels: {
         			                enabled: true
         			            },
         			            enableMouseTracking: false
         			        }
         			    },
         			    series: [{
         			        name: 'TMAX',
         			        data: TMAX
         			    }, {
         			        name: 'TMIN',
         			        data: TMIN
         			    }]
         			});
     	     	
     			}
     		
     		});
     		
     	
     	
    	}
     //console.log(arr);
     	 
     	  // var date1=document.getElementById("dv").value;
     	  
    	//var fm=new Date(date1);
    	//console.log(date1);
    	//var dd1=[];
    	var TTMAX=[];
    	var TTMIN=[];
    	for(var i=1;i<=6;i++)
    	{
    		var fm = new Date(date1);
         	fm.setDate(fm.getDate()+i);
         	console.log(fm);        	
         	//var formattedDate = new Date(date1);
         	//formattedDate.setDate(formattedDate.getDate()+i);
         	//console.log(formattedDate);        	
         	
         	
         	//var d = formattedDate.getDate();
         	//console.log(d);
         	//var m =  formattedDate.getMonth();
         	//m += 1;  // JavaScript months are 0-1
         	//var y = formattedDate.getFullYear();
     		//date = y + "" + (m>9 ? '' : '0') + m + "" + (d>9 ? '' : '0') + d;
     		//console.log(date);
         	
         	var D = fm.getDate();
         	//console.log(d);
         	var M =  fm.getMonth();
         	M += 1;  // JavaScript months are 0-1
         	var Y = fm.getFullYear();
     		date1 = Y + "-" + (M>9 ? '' : '0') + M + "-" + (D>9 ? '' : '0') + D;
     		//date2= Y + "" + (M>9 ? '' : '0') + M + "" + (D>9 ? '' : '0') + D;
     		//console.log(date1);
     	$.ajax
     	({
     			type:"GET",
     			dataType:"json",
     			async:true,
     			url:"https://api.darksky.net/forecast/e344f53a5abf56d7f5d29059e9331193/39.103118,-84.512020,"+date1+"T12:00:00",
     			success:function(data)
     			{ 
     				
     				//dd1.push(date1);
     				TTMAX.push(data.daily.data["0"].temperatureMax);
     				TTMIN.push(data.daily.data["0"].temperatureMin);
     				
     				
     	    		Highcharts.chart('container1', {
         			    chart: {
         			        type: 'line'
         			    },
         			    title: {
         			        text: 'Temperatures in Cincinnati'
         			    },
         			    subtitle: {
         			        text: 'Source:DarkSky API(Bonus Question)'
         			    },
         			    xAxis: {
         			        categories: d1
         			    },
         			    yAxis: {
         			        title: {
         			            text: 'Temperature (°F)'
         			        }
         			    },
         			    plotOptions: {
         			        line: {
         			            dataLabels: {
         			                enabled: true
         			            },
         			          
         			            enableMouseTracking: false
         			        }
         			    },
         			    series: [{
         			        name: 'TMAX',
         			        data: TTMAX
         			    }, {
         			        name: 'TMIN',
         			        data: TTMIN
         			    }]
         			  
         			});
     	     	
     			}  
         	
         		
       	});
    	}
    	
    		}	
   	});
     	
   });
}
     