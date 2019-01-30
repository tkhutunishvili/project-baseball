Create database if not exists  baseball_data;
USE baseball_data;


CREATE TABLE IF NOT EXISTS w (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    year INT,
    abbr VARCHAR(250),
    team_name VARCHAR(250),
    home_base VARCHAR(250),
    win INT,
    loss INT,
    lat VARCHAR(250),
    lon VARCHAR(250)
);

CREATE TABLE IF NOT EXISTS team_batting (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    Team VARCHAR(250),
    Season INT,
    SB INT
);
CREATE TABLE IF NOT EXISTS bwar_bat (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name_common VARCHAR(250),
    player_ID VARCHAR(250),
    year_ID INT,
    team_ID VARCHAR(250),
    salary INT,
    PA INT,
    G INT
);
  
show tables;

