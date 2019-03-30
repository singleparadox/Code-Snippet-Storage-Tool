<?php

	include_once "connection.php";

	$cid = $_POST['cid'];

	$sql = "DELETE FROM `storage` WHERE `storage`.`storage_id` = $cid";

	$result = $conn->query($sql);


	if ($result) {
		echo "success";
		//echo $sql;
	} //else {
		//echo $sql;
	//}



?>