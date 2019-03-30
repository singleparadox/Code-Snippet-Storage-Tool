<?php

	include_once "connection.php";

	$sql = "TRUNCATE `storage`";
	$result = $conn->query($sql);


	if ($result) {
		echo "success";
		//echo $sql;
	} //else {
		//echo $sql;
	//}



?>