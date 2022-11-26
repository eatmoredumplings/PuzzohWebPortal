CREATE TABLE `vouchers` (
   `vendorID` int NOT NULL,
   `id` int NOT NULL AUTO_INCREMENT,
   `title` varchar(100) NOT NULL,
   `description` varchar(200) DEFAULT NULL,
   `category` enum('Meal','Activity') NOT NULL,
   `priceBefore` decimal(10,2) NOT NULL,
   `priceAfter` decimal(10,2) NOT NULL,
   `image` blob,
   `maxRedeem` int NOT NULL,
   `createDate` date DEFAULT NULL,
   `expireDate` date DEFAULT NULL,
   `cuisineType` varchar(200) DEFAULT NULL,
   `activityType` varchar(45) DEFAULT NULL,
   PRIMARY KEY (`id`),
   KEY `vendorId_idx` (`vendorID`),
   CONSTRAINT `vendorId` FOREIGN KEY (`vendorID`) REFERENCES `vendors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
 ) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
