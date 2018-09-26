CREATE DATABASE  IF NOT EXISTS `sf_restaurants` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `sf_restaurants`;
-- MySQL dump 10.13  Distrib 8.0.12, for macos10.13 (x86_64)
--
-- Host: localhost    Database: sf_restaurants
-- ------------------------------------------------------
-- Server version	8.0.11

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `restaurants`
--

DROP TABLE IF EXISTS `restaurants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `restaurants` (
  `business_id` int(11) DEFAULT NULL,
  `business_name` text,
  `business_address` text,
  `business_postal_code` int(11) DEFAULT NULL,
  `inspection_score` int(11) DEFAULT NULL,
  `violation_description` text,
  `risk_category` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `restaurants`
--

LOCK TABLES `restaurants` WRITE;
/*!40000 ALTER TABLE `restaurants` DISABLE KEYS */;
INSERT INTO `restaurants` VALUES (275,'Ben & Jerry\'s','170 O\'Farrell St Basement',94102,96,'Improper food labeling or menu misrepresentation','Low Risk'),(275,'Ben & Jerry\'s','170 O\'Farrell St Basement',94102,96,'Unclean or degraded floors walls or ceilings','Low Risk'),(315,'The Posh Bagel','495A CASTRO St',94114,94,'Insufficient hot water or running water','Moderate Risk'),(315,'The Posh Bagel','495A CASTRO St',94114,94,'Food safety certificate or food handler card not available','Low Risk'),(500,'Roxanne Cafe','570 Powell St',94108,86,'Unclean nonfood contact surfaces','Low Risk'),(500,'Roxanne Cafe','570 Powell St',94108,86,'Inadequate and inaccessible handwashing facilities','Moderate Risk'),(500,'Roxanne Cafe','570 Powell St',94108,86,'Improper storage of equipment utensils or linens','Low Risk'),(500,'Roxanne Cafe','570 Powell St',94108,86,'Unclean or degraded floors walls or ceilings','Low Risk'),(2544,'EMPEROR PALACE RESTAURANT','0530 BALBOA St',94118,78,'Inadequately cleaned or sanitized food contact surfaces','Moderate Risk'),(2544,'EMPEROR PALACE RESTAURANT','0530 BALBOA St',94118,78,'High risk vermin infestation','High Risk'),(2544,'EMPEROR PALACE RESTAURANT','0530 BALBOA St',94118,78,'Unapproved or unmaintained equipment or utensils','Low Risk'),(2544,'EMPEROR PALACE RESTAURANT','0530 BALBOA St',94118,78,'Unclean or degraded floors walls or ceilings','Low Risk'),(3118,'Hyatt Union Square Main Kitchen','345 Stockton St Flr 3B',94108,96,'Inadequately cleaned or sanitized food contact surfaces','Moderate Risk'),(3562,'Mixed Greens Prep Kitchen','170 O\'Farrell St 8th Floor',94102,87,'Unclean nonfood contact surfaces','Low Risk'),(3562,'Mixed Greens Prep Kitchen','170 O\'Farrell St 8th Floor',94102,87,'Unapproved or unmaintained equipment or utensils','Low Risk'),(3562,'Mixed Greens Prep Kitchen','170 O\'Farrell St 8th Floor',94102,87,'Unclean or degraded floors walls or ceilings','Low Risk'),(3562,'Mixed Greens Prep Kitchen','170 O\'Farrell St 8th Floor',94102,87,'Improper cooling methods','High Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Improper storage of equipment utensils or linens','Low Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Low risk vermin infestation','Low Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Worker safety hazards','Low Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Unclean or degraded floors walls or ceilings','Low Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Inadequate ventilation or lighting','Low Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Unsanitary employee garments hair or nails','Low Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Inadequately cleaned or sanitized food contact surfaces','Moderate Risk'),(3750,'Takara Restaurant','22 Peace Plaza  #505',94115,80,'Inadequate and inaccessible handwashing facilities','Moderate Risk'),(3867,'Bacco','737 DIAMOND St',94114,98,'Improper food storage','Low Risk'),(4686,'RICE GARDEN','1515 SLOAT Blvd',94132,92,'Inadequately cleaned or sanitized food contact surfaces','Moderate Risk'),(4686,'RICE GARDEN','1515 SLOAT Blvd',94132,92,'Foods not protected from contamination','Moderate Risk'),(5815,'ALVARADO ELEMENTARY SCHOOL','625  DOUGLASS St',94114,94,'Foods not protected from contamination','Moderate Risk'),(5815,'ALVARADO ELEMENTARY SCHOOL','625  DOUGLASS St',94114,94,'Low risk vermin infestation','Low Risk'),(5830,'Theodore Roosevelt Middle School','460 Arguello Blvd',94118,98,'Low risk vermin infestation','Low Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'High risk vermin infestation','High Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Unclean or degraded floors walls or ceilings','Low Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Inadequate and inaccessible handwashing facilities','Moderate Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Improper storage of equipment utensils or linens','Low Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Foods not protected from contamination','Moderate Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Unapproved or unmaintained equipment or utensils','Low Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Improper storage use or identification of toxic substances','Low Risk'),(6944,'ABC Super Market Inc','641 Broadway St',94133,73,'Inadequately cleaned or sanitized food contact surfaces','Moderate Risk'),(7361,'PastaGina','741 Diamond St',94114,85,'High risk vermin infestation','High Risk'),(7361,'PastaGina','741 Diamond St',94114,85,'Improper food storage','Low Risk'),(7361,'PastaGina','741 Diamond St',94114,85,'Unclean or degraded floors walls or ceilings','Low Risk'),(7525,'Stone House Calif Olive Oil','1 Ferry Building  #28',94111,93,'Contaminated or adulterated food','High Risk'),(14971,'San Francisco Public Montessori','2340 Jackson St',94115,94,'Foods not protected from contamination','Moderate Risk'),(14971,'San Francisco Public Montessori','2340 Jackson St',94115,94,'Improper storage of equipment utensils or linens','Low Risk'),(15279,'Deli World','18 Ocean Ave.',94112,88,'Inadequate food safety knowledge or lack of certified food safety manager','Moderate Risk'),(15279,'Deli World','18 Ocean Ave.',94112,88,'Unapproved or unmaintained equipment or utensils','Low Risk'),(15279,'Deli World','18 Ocean Ave.',94112,88,'Inadequate warewashing facilities or equipment','Low Risk'),(18755,'Kitchen Istanbal','349 Clement St.',94118,87,'Unclean or degraded floors walls or ceilings','Low Risk'),(18755,'Kitchen Istanbal','349 Clement St.',94118,87,'Improper cooling methods','High Risk'),(18755,'Kitchen Istanbal','349 Clement St.',94118,87,'Wiping cloths not clean or properly stored or inadequate sanitizer','Low Risk'),(20327,'Subs, Inc.','1300 CASTRO St',94114,92,'Unclean or degraded floors walls or ceilings','Low Risk'),(20327,'Subs, Inc.','1300 CASTRO St',94114,92,'Low risk vermin infestation','Low Risk'),(32835,'The Pizza Place','3901 Noriega Street',94122,91,'Unclean or unsanitary food contact surfaces','High Risk'),(32835,'The Pizza Place','3901 Noriega Street',94122,91,'Unclean or degraded floors walls or ceilings','Low Risk'),(32919,'New Princess Market','500 Eddy St',94109,84,'Inadequate and inaccessible handwashing facilities','Moderate Risk'),(32919,'New Princess Market','500 Eddy St',94109,84,'Moderate risk vermin infestation','Moderate Risk'),(32919,'New Princess Market','500 Eddy St',94109,84,'Unclean or degraded floors walls or ceilings','Low Risk'),(32919,'New Princess Market','500 Eddy St',94109,84,'Foods not protected from contamination','Moderate Risk'),(32919,'New Princess Market','500 Eddy St',94109,84,'Unapproved or unmaintained equipment or utensils','Low Risk'),(35240,'New San Wang Restaurant','1682 Post St',94115,85,'Foods not protected from contamination','Moderate Risk'),(35240,'New San Wang Restaurant','1682 Post St',94115,85,'Inadequate and inaccessible handwashing facilities','Moderate Risk'),(35359,'Pagoda','1704 Post St',94115,96,'Moderate risk vermin infestation','Moderate Risk'),(35884,'Tortilla Kitchen','170 O\'Farrell St Lower Level',94102,98,'Improper storage of equipment utensils or linens','Low Risk'),(36020,'Cadillac Market','499 Eddy St',94109,84,'Moderate risk vermin infestation','Moderate Risk'),(36020,'Cadillac Market','499 Eddy St',94109,84,'Inadequate and inaccessible handwashing facilities','Moderate Risk'),(36020,'Cadillac Market','499 Eddy St',94109,84,'Inadequately cleaned or sanitized food contact surfaces','Moderate Risk'),(36020,'Cadillac Market','499 Eddy St',94109,84,'Unclean or degraded floors walls or ceilings','Low Risk'),(36020,'Cadillac Market','499 Eddy St',94109,84,'Improper food storage','Low Risk'),(60445,'Castro Coffee Company','0427 CASTRO St',94114,96,'Insufficient hot water or running water','Moderate Risk'),(65392,'Cantata Coffee Shop','1708 Haight St',94117,94,'Inadequate food safety knowledge or lack of certified food safety manager','Moderate Risk'),(65392,'Cantata Coffee Shop','1708 Haight St',94117,94,'Unapproved or unmaintained equipment or utensils','Low Risk'),(69792,'Samiramis Imports','2990 MISSION St',94110,90,'Improper storage of equipment utensils or linens','Low Risk'),(69792,'Samiramis Imports','2990 MISSION St',94110,90,'Foods not protected from contamination','Moderate Risk'),(69792,'Samiramis Imports','2990 MISSION St',94110,90,'Unclean or degraded floors walls or ceilings','Low Risk'),(69792,'Samiramis Imports','2990 MISSION St',94110,90,'Non service animal','Low Risk'),(2823,'Grand Hyatt - Bistro-Employee Cafeteria','345 Stockton St Flr 2B',94108,100,'',''),(16286,'Starbucks Coffee (Store #9743)','425 Battery St',94111,100,'',''),(26146,'Macy\'s Cellar','170 O\'Farrell St Basement',94102,100,'',''),(65724,'Le Meridien SF Main Kitchen/Employee Cafeteria','333 Battery St Level A & B',94111,100,'',''),(65725,'Le Meridien SF Park Grill Restaurant & Bar','333 Battery St Level 2 & 3',94111,100,'',''),(68070,'Per Diem','564 Market St #140',94104,100,'','');
/*!40000 ALTER TABLE `restaurants` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-25 19:16:15
