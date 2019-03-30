<?php
	define("HOST", "localhost");
	define("DBUSER", "root");
	define("DBPASS", "");
	define("DB", "data_db");
	$conn = mysqli_connect(HOST, DBUSER, DBPASS, DB);
		 if ($conn->connect_errno) {
	         die("ERROR : -> ".$con->connect_error);
	     }


/*
CREATE TABLE `data_db`.`storage` ( `storage_id` INT NOT NULL AUTO_INCREMENT , `storage_title` VARCHAR(255) NOT NULL , `storage_content` LONGTEXT NOT NULL , `storage_language` INT NOT NULL , PRIMARY KEY (`storage_id`)) ENGINE = InnoDB;

*/
?>


