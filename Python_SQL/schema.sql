DROP DATABASE IF EXISTS profile_db;
CREATE DATABASE profile_db;

USE profile_db;

CREATE TABLE titles (
  id INT NOT NULL,
  PRIMARY KEY (id),
  title CHAR(40)
);

CREATE TABLE users (
  id INT NOT NULL,
  PRIMARY KEY (id),
  firstname CHAR(40),
  lastname CHAR(40),
  age INT NOT NULL,
  region CHAR(40),
  title_id INT,
  FOREIGN KEY (title_id)
    REFERENCES titles(id)
);

CREATE TABLE user_profile_urls (
  id INT NOT NULL,
  PRIMARY KEY (id),
  user_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  profile_url TEXT
);

CREATE TABLE internal_profile_views (
  id INT NOT NULL,
  PRIMARY KEY (id),
  user_id INT NOT NULL,
  FOREIGN KEY (user_id)
    REFERENCES users(id),
  viewed_user_id INT,
  FOREIGN KEY (viewed_user_id)
    REFERENCES users(id)
);

CREATE TABLE external_profile_views (
  id INT NOT NULL,
  PRIMARY KEY (id),
  public_profile_url TEXT,
  unique_PageViews INT DEFAULT 0
);

