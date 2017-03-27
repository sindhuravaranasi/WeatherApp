# Pull base image
From tomcat:8-jre8

# Maintainer
MAINTAINER "Sindhura Varanasi <varanasa@mail.uc.edu">

# Copy to images tomcat path
ADD Weather.war /usr/local/tomcat/webapps/


