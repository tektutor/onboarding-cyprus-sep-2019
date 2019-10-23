FROM jeanblanchard/busybox-java:8
MAINTAINER Jeganathan Swaminathan <jegan@tektutor.org>

COPY tektutor-order-ms-0.0.1-SNAPSHOT.jar /

EXPOSE 8086

ENTRYPOINT [ "java", "-jar", "/tektutor-order-ms-0.0.1-SNAPSHOT.jar"]
