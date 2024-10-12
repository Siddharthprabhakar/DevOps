-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: eduflex
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment` (
  `assignmentid` int NOT NULL AUTO_INCREMENT,
  `courseid` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  PRIMARY KEY (`assignmentid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `assignment_ibfk_1` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (1,1,'Assignment 1','Completed','2023-11-01'),(2,1,'Assignment 2','Not Completed','2023-11-15'),(3,1,'Final Project','Not Completed','2023-12-10'),(4,2,'Problem Set 1','Completed','2023-11-01'),(5,2,'Homework 2','Completed','2023-11-15'),(6,2,'Final Project','Completed','2023-12-10'),(7,3,'Homework 1','Not Completed','2023-11-01'),(8,3,'Quiz 1','Not Completed','2023-11-15'),(9,3,'Final Exam','Not Completed','2023-12-10'),(10,4,'Homework 1','Completed','2023-11-01'),(11,4,'Midterm Exam','Completed','2023-11-15'),(12,4,'Final Project','Not Completed','2023-12-10'),(13,5,'Assignment 1','Completed','2023-11-01'),(14,5,'Security Lab','Not Completed','2023-11-15'),(15,5,'Final Project','Not Completed','2023-12-10'),(16,6,'Essay Assignment','Completed','2023-11-01'),(17,6,'Trade Simulation','Completed','2023-11-15'),(18,6,'Globalization Project','Completed','2023-12-10'),(19,1,'Final Project Review','Not Completed','2023-11-04'),(20,5,'Assignment 5','Not Completed','2023-10-31');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `categoryid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Computer Science'),(2,'Physics'),(3,'Economics'),(4,'Biology');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `certificate`
--

DROP TABLE IF EXISTS `certificate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificate` (
  `certificateid` int NOT NULL AUTO_INCREMENT,
  `courseid` int DEFAULT NULL,
  `date_of_query` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`certificateid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `certificate_ibfk_1` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificate`
--

LOCK TABLES `certificate` WRITE;
/*!40000 ALTER TABLE `certificate` DISABLE KEYS */;
INSERT INTO `certificate` VALUES (1,1,'2023-12-15','Certificate awarded for completing Introduction to Machine Learning course.'),(2,2,'2023-12-18','Certificate awarded for completing Quantum Mechanics Fundamentals course.'),(3,3,'2023-12-22','Certificate awarded for completing Microeconomics Principles course.'),(4,4,'2023-12-25','Certificate awarded for completing Genetics and Evolution course.'),(5,5,'2023-12-28','Certificate awarded for completing Cybersecurity and Network Defense course.'),(6,6,'2023-12-31','Certificate awarded for completing International Trade and Globalization course.');
/*!40000 ALTER TABLE `certificate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `course` (
  `courseid` int NOT NULL AUTO_INCREMENT,
  `categoryid` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `description` text,
  PRIMARY KEY (`courseid`),
  KEY `categoryid` (`categoryid`),
  CONSTRAINT `course_ibfk_1` FOREIGN KEY (`categoryid`) REFERENCES `category` (`categoryid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `course`
--

LOCK TABLES `course` WRITE;
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` VALUES (1,1,'Introduction to Machine Learning','Learn the basics of machine learning.'),(2,2,'Quantum Mechanics Fundamentals','Explore the quantum world.'),(3,3,'Microeconomics Principles','Understanding economic behavior.'),(4,4,'Genetics and Evolution','The study of genes and evolution.'),(5,1,'Cybersecurity and Network Defense','Learn to protect computer systems from cyber threats.'),(6,3,'International Trade and Globalization','Examine the impact of trade on global economies and societies.');
/*!40000 ALTER TABLE `course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `earns`
--

DROP TABLE IF EXISTS `earns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `earns` (
  `certificateid` int NOT NULL,
  `studentid` int NOT NULL,
  PRIMARY KEY (`certificateid`,`studentid`),
  KEY `studentid` (`studentid`),
  CONSTRAINT `earns_ibfk_1` FOREIGN KEY (`studentid`) REFERENCES `student` (`studentid`),
  CONSTRAINT `earns_ibfk_2` FOREIGN KEY (`certificateid`) REFERENCES `certificate` (`certificateid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `earns`
--

LOCK TABLES `earns` WRITE;
/*!40000 ALTER TABLE `earns` DISABLE KEYS */;
/*!40000 ALTER TABLE `earns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enrolled_course`
--

DROP TABLE IF EXISTS `enrolled_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enrolled_course` (
  `enrollid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `date_of_enroll` date DEFAULT NULL,
  PRIMARY KEY (`enrollid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enrolled_course`
--

LOCK TABLES `enrolled_course` WRITE;
/*!40000 ALTER TABLE `enrolled_course` DISABLE KEYS */;
INSERT INTO `enrolled_course` VALUES (1,7,'2023-10-01'),(2,8,'2023-10-02'),(3,9,'2023-10-03'),(4,10,'2023-10-04'),(5,11,'2023-10-05'),(6,12,'2023-10-06');
/*!40000 ALTER TABLE `enrolled_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instructor`
--

DROP TABLE IF EXISTS `instructor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `instructor` (
  `instructorid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `qualification` varchar(255) DEFAULT NULL,
  `expertise` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`instructorid`),
  KEY `userid` (`userid`),
  CONSTRAINT `instructor_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructor`
--

LOCK TABLES `instructor` WRITE;
/*!40000 ALTER TABLE `instructor` DISABLE KEYS */;
INSERT INTO `instructor` VALUES (1,1,'Ph.D. in Computer Science','Machine Learning'),(2,2,'M.Sc. in Physics','Quantum Mechanics'),(3,3,'M.Sc. in Economics','Microeconomics'),(4,4,'Ph.D. in Biology','Genetics'),(5,5,'M.Sc. in Computer Science','Cybersecurity'),(6,6,'Ph.D. in Economics','World Economics'),(12,37,'Ph.D.','Economics'),(13,41,'Ph.D.','Computer Science');
/*!40000 ALTER TABLE `instructor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `material` (
  `materialid` int NOT NULL AUTO_INCREMENT,
  `courseid` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `content` text,
  PRIMARY KEY (`materialid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `material_ibfk_1` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `material`
--

LOCK TABLES `material` WRITE;
/*!40000 ALTER TABLE `material` DISABLE KEYS */;
INSERT INTO `material` VALUES (1,1,'Lecture Notes Week 2','Introduction to ML algorithms'),(2,1,'Lab Exercise Materials','Hands-on exercises with Python'),(3,1,'Research Paper','Recent advancements in ML research'),(4,2,'Lecture Slides','Introduction to quantum mechanics'),(5,2,'Lab Experiment Guide','Hands-on experiments in quantum physics'),(6,2,'Research Papers','Key research papers in quantum mechanics'),(7,3,'Case Studies','Real-world microeconomics case studies'),(8,3,'Textbook','Microeconomics principles and concepts'),(9,3,'Lecture Notes','Market structures and pricing strategies'),(10,4,'Textbook','Genetics and evolutionary biology principles'),(11,4,'Lecture Slides','Darwinian evolution and genetics'),(12,4,'Research Papers','Key studies in genetics and evolution'),(13,5,'Cybersecurity Handbook','Principles and practices of cybersecurity'),(14,5,'Lab Materials','Hands-on network security exercises'),(15,5,'Research Papers','Recent developments in network defense'),(16,6,'Textbook','International trade and globalization concepts'),(17,6,'Lecture Slides','Trade agreements and global markets'),(18,6,'Case Studies','Real-world examples of global trade issues'),(19,1,'Lecture Notes Week 3','Basic labs about ML');
/*!40000 ALTER TABLE `material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `message`
--

DROP TABLE IF EXISTS `message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `message` (
  `messageid` int NOT NULL AUTO_INCREMENT,
  `studentid` int DEFAULT NULL,
  `description` text,
  `time_stamp` datetime DEFAULT NULL,
  PRIMARY KEY (`messageid`),
  KEY `studentid` (`studentid`),
  CONSTRAINT `message_ibfk_1` FOREIGN KEY (`studentid`) REFERENCES `student` (`studentid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `message`
--

LOCK TABLES `message` WRITE;
/*!40000 ALTER TABLE `message` DISABLE KEYS */;
/*!40000 ALTER TABLE `message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `query`
--

DROP TABLE IF EXISTS `query`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `query` (
  `queryid` int NOT NULL AUTO_INCREMENT,
  `courseid` int DEFAULT NULL,
  `date_of_query` date DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`queryid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `query_ibfk_1` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `query`
--

LOCK TABLES `query` WRITE;
/*!40000 ALTER TABLE `query` DISABLE KEYS */;
INSERT INTO `query` VALUES (1,1,'2023-10-15','Question about linear regression'),(2,1,'2023-10-20','Confusion matrix explanation needed'),(3,1,'2023-11-25','Help with data preprocessing'),(4,2,'2023-10-15','Question about wave functions'),(5,2,'2023-10-20','Quantum entanglement explanation needed'),(6,2,'2023-11-25','Help with quantum mechanics concepts'),(7,3,'2023-10-15','Question about supply and demand'),(8,3,'2023-10-20','Elasticity concept explanation needed'),(9,3,'2023-11-25','Help with market equilibrium'),(10,4,'2023-10-15','Question about genetic mutations'),(11,4,'2023-10-20','Natural selection explanation needed'),(12,4,'2023-11-25','Help with evolutionary theory'),(13,5,'2023-10-15','Question about firewall configurations'),(14,5,'2023-10-20','Incident response plan explanation needed'),(15,5,'2023-11-25','Help with network intrusion detection'),(16,6,'2023-10-15','Question about trade policies'),(17,6,'2023-10-20','Global economic integration explanation needed'),(18,6,'2023-11-25','Help with trade theory and practice'),(19,1,'2023-10-29','Question about the instructor'),(20,2,'2023-10-29','Question about previous week\'s lectures'),(21,1,'2023-10-29','Question about lecture 5');
/*!40000 ALTER TABLE `query` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registers`
--

DROP TABLE IF EXISTS `registers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registers` (
  `studentid` int NOT NULL,
  `courseid` int NOT NULL,
  PRIMARY KEY (`studentid`,`courseid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `registers_ibfk_1` FOREIGN KEY (`studentid`) REFERENCES `student` (`studentid`),
  CONSTRAINT `registers_ibfk_2` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registers`
--

LOCK TABLES `registers` WRITE;
/*!40000 ALTER TABLE `registers` DISABLE KEYS */;
INSERT INTO `registers` VALUES (1,1),(5,1),(2,2),(3,2),(5,2),(11,2),(3,3),(11,3),(4,4),(5,4),(5,5),(6,5),(12,5);
/*!40000 ALTER TABLE `registers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `reviewid` int NOT NULL AUTO_INCREMENT,
  `courseid` int DEFAULT NULL,
  `date_of_review` date DEFAULT NULL,
  `description` text,
  `rating` int DEFAULT NULL,
  PRIMARY KEY (`reviewid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `review_ibfk_1` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
INSERT INTO `review` VALUES (1,1,'2023-10-12','Great course on machine learning!',5),(2,2,'2023-10-13','Fascinating topics on quantum mechanics.',4),(3,3,'2023-10-14','The economics course was very informative.',4),(4,4,'2023-10-15','Loved learning about genetics!',5),(5,5,'2023-10-16','Exceptional cybersecurity course with practical skills.',5),(6,6,'2023-10-17','Insightful global economics study, more real-world examples needed.',4),(7,1,'2023-10-18','Machine learning assignments were challenging.',4),(8,2,'2023-10-19','Quantum mechanics is complex but fascinating.',4),(9,3,'2023-10-20','Microeconomics principles explained clearly.',5),(10,4,'2023-10-21','Genetics course has great content.',5),(11,5,'2023-10-22','Top-notch cybersecurity training, highly practical.',4),(12,6,'2023-10-23','Solid global economics course, real-world applications would make it better.',5),(13,1,'2023-10-29','Good Course',3),(17,2,'2023-10-29','Great instructor!',5),(18,1,'2023-10-29','Amazing course',4),(19,5,'2023-10-30','Great Course',4),(20,2,'2023-10-30','Lmao',3);
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student` (
  `studentid` int NOT NULL AUTO_INCREMENT,
  `userid` int DEFAULT NULL,
  `education_level` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`studentid`),
  KEY `userid` (`userid`),
  CONSTRAINT `student_ibfk_1` FOREIGN KEY (`userid`) REFERENCES `user` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (1,7,'Undergraduate'),(2,8,'Graduate'),(3,9,'High School'),(4,10,'Undergraduate'),(5,11,'Graduate'),(6,12,'Undergraduate'),(8,21,'High School'),(11,40,'Graduate'),(12,42,'High School');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teaches`
--

DROP TABLE IF EXISTS `teaches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teaches` (
  `instructorid` int NOT NULL,
  `courseid` int NOT NULL,
  PRIMARY KEY (`instructorid`,`courseid`),
  KEY `courseid` (`courseid`),
  CONSTRAINT `teaches_ibfk_1` FOREIGN KEY (`instructorid`) REFERENCES `instructor` (`instructorid`),
  CONSTRAINT `teaches_ibfk_2` FOREIGN KEY (`courseid`) REFERENCES `course` (`courseid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teaches`
--

LOCK TABLES `teaches` WRITE;
/*!40000 ALTER TABLE `teaches` DISABLE KEYS */;
INSERT INTO `teaches` VALUES (1,1),(2,2),(3,3),(4,4),(5,5),(6,6);
/*!40000 ALTER TABLE `teaches` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `userid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'John Doe','john@example.com','secret123'),(2,'Alice Smith','alice@example.com','p@ssw0rd'),(3,'Bob Johnson','bob@example.com','mysecret'),(4,'Jane Lee','jane@example.com','janepassword'),(5,'Sam Brown','sam@example.com','sambrown1'),(6,'Linda White','linda@example.com','lindapass'),(7,'David Davis','david@example.com','daviddav'),(8,'Mary Taylor','mary@example.com','marypass'),(9,'Chris Green','chris@example.com','chris123'),(10,'Karen Reed','karen@example.com','karenpass'),(11,'Emily Hall','emily@example.com','emilypass'),(12,'Michael Turner','michael@example.com','michaelpass'),(21,'Vishant Kalwani','vishanto95@gmail.com','WASD1234'),(37,'Vrushti Shah','vshah@gmail.com','qwerty12'),(40,'Yash Mangale','ymg@gmail.com','qwerty12'),(41,'Vedanshi Sahu','vsahu@gmail.com','wasd45'),(42,'Emily Watson','emil@gmail.com','qwerty');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'eduflex'
--

--
-- Dumping routines for database 'eduflex'
--
/*!50003 DROP PROCEDURE IF EXISTS `CheckEnrollment` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `CheckEnrollment`(IN courseId INT, IN studentId INT, OUT result TINYINT(1))
BEGIN
    -- Initialize result to 0 (false) by default
    SET result = 0;

    -- Check if there is a row with the provided courseId and studentId
    IF EXISTS (SELECT 1 FROM Registers WHERE courseid = courseId AND studentid = studentId) THEN
        -- Row exists, set result to 1 (true)
        SET result = 1;
    END IF;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCertificate` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCertificate`(IN courseId INT)
BEGIN
    SELECT
        C.title AS course_title,
        CER.date_of_query AS issue_date,
        U.name as instructor_name,
        CONCAT("ceRtscxe4ss", CER.certificateid) as certificate_id
    FROM Course C
    JOIN Teaches T ON C.courseid = T.courseid
    JOIN Instructor I ON T.instructorid = I.instructorid
    JOIN User U ON I.userid = U.userid
    JOIN Certificate CER ON C.courseid = CER.courseid
    WHERE C.courseid = courseId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetCourseDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetCourseDetails`(IN courseId INT)
BEGIN
    SELECT
		C.title AS course_title,
        C.description AS course_description,
        U.name AS instructor_name,
        CAT.name AS category_name
    FROM Course C
    JOIN Teaches T ON C.courseid = T.courseid
    JOIN Instructor I ON T.instructorid = I.instructorid
    JOIN User U ON I.userid = U.userid
    JOIN Category CAT ON C.categoryid = CAT.categoryid
    WHERE C.courseid = courseId;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `GetUserDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `GetUserDetails`(IN userEmail VARCHAR(255), IN userPassword VARCHAR(255))
BEGIN
    SELECT
        U.userid,
        CASE
            WHEN S.studentid IS NOT NULL THEN S.studentid
            WHEN I.instructorid IS NOT NULL THEN I.instructorid
        END AS roleid,
        U.name,
        U.email,
        CASE
            WHEN S.studentid IS NOT NULL THEN 'student'
            WHEN I.instructorid IS NOT NULL THEN 'instructor'
        END AS rolename,
        CASE
            WHEN S.studentid IS NOT NULL THEN S.education_level
            ELSE NULL
        END AS education_level,
        CASE
            WHEN I.instructorid IS NOT NULL THEN I.qualification
            ELSE NULL
        END AS qualification,
        CASE
            WHEN I.instructorid IS NOT NULL THEN I.expertise
            ELSE NULL
        END AS expertise
    FROM User U
    LEFT JOIN Student S ON U.userid = S.userid
    LEFT JOIN Instructor I ON U.userid = I.userid
    WHERE U.email = userEmail AND U.password = userPassword;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-04 15:25:59
