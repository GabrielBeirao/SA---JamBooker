-- Active: 1681945846296@@127.0.0.1@3306
    CREATE DATABASE jambooker;

    CREATE USER 'jambooker'@'localhost' IDENTIFIED BY 'jambooker';

    GRANT ALL PRIVILEGES ON jambooker.* TO 'jambooker'@'localhost';