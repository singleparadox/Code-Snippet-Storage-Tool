<?php
	include_once "connection.php";


	$id = $_POST['cid'];
	$content = $_POST['code'];
	$title = $_POST['t'];

	$quotes = str_replace('"', '\"', $content);
	$quotes = str_replace("'", "\'", $quotes);
	$sql = "UPDATE `storage` SET `storage_content` = '$quotes' WHERE `storage`.`storage_id` = $id";
	$sql_t = "UPDATE storage SET storage_title = '$title' WHERE storage.storage_id = $id";

	$result = $conn->query($sql);
	$result_t = $conn->query($sql_t);

	if ($result && $result_t) {
		echo "success";
		//echo $sql;
	} //else {
		//echo $sql;
	//}



?>