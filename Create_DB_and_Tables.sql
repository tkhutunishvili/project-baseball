Create database if not exists  baseball_data;
USE baseball_data;


CREATE TABLE IF NOT EXISTS schedule_and_record (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Team VARCHAR(250),
    Win INT,
    Loss INT,
    lat VARCHAR(250),
    lon VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS team_batting (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Team VARCHAR(250),
    Season INT,
    SB INT
);

show tables;