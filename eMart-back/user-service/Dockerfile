FROM openjdk:8-jdk-alpine
MAINTAINER tracy
VOLUME /tmp
ARG JAR_FILE
COPY ${JAR_FILE} app.jar
RUN echo "${JAR_FILE} abc"
ENV JAVA_OPTS="-Duser.timezone=UTC"
ENTRYPOINT java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /app.jar