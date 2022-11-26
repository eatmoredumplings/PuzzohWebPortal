CREATE TABLE `vendors` (
   `id` int NOT NULL AUTO_INCREMENT,
   `email` varchar(45) NOT NULL,
   `password` varchar(20) NOT NULL,
   `vendorName` varchar(45) NOT NULL,
   `vendorAddress` varchar(200) DEFAULT NULL,
   `vendorType` enum('Restaurant','Non-restaurant') DEFAULT NULL,
   `vendorDescription` varchar(200) DEFAULT NULL,
   `representativeName` varchar(45) DEFAULT NULL,
   `contactNumber` varchar(15) DEFAULT NULL,
   `vendorLink` varchar(200) DEFAULT NULL,
   `verified` tinyint DEFAULT NULL,
   PRIMARY KEY (`id`)
 ) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
