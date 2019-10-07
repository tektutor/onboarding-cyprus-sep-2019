FROM ubuntu
MAINTAINER Jeganathan Swaminathan <jegan@tektutor.org>

#ENV http_proxy http://192.168.101.52:8080
#ENV https_proxy http://192.168.101.52:8080
#ENV no_proxy_hosts localhost,127.0.0.1,your-machine-ip

ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64
ENV M2_HOME /usr/share/maven
ENV PATH $JAVA_HOME/bin:$M2_HOME/bin:$PATH


RUN apt-get update && apt-get install default-jdk git maven -y
