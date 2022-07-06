/* MySQL */

CREATE DATABASE csci71;
USE csci71;

CREATE TABLE events (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  date DATETIME,
  description TEXT,
  PRIMARY KEY (id)
 );

/* Sample data */
INSERT INTO events VALUES (NULL, "Summer Camp 2022", "2022-07-08", "We are going to have our annual summer camp starting this Friday. Please, confirm you are coming with us!");
INSERT INTO events VALUES (NULL, "Bible study at Jonh's house", "2022-07-12 19:00:00", "We are going to meet at Jonh's house this Tuesday to have a Bible study led by our pastor Roberto. After the study we will have our traditional tea time! Let us know you are coming so we can plan accordingly.");
INSERT INTO events VALUES (NULL, "Worship band for Sunday night service", "2022-07-10 17:00:00", "List of people called to serve on the band.");


