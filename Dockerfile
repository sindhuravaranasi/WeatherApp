# Pull base image
From tomcat:8-jre8

# Maintainer
MAINTAINER "varanasa@mail.uc.edu">

# Copy to images tomcat path
ADD C:/Users/Sindhura Varanasi/Weather.war /usr/local/tomcat/webapps/
