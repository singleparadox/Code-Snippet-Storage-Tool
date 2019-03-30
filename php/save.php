<?php
	include_once "connection.php";


	$content = $_POST['code'];
	$title = $_POST['t'];
	$lang = $_POST['language'];

	$quotes = str_replace('"', '\"', $content);
	$quotes = str_replace("'", "\'", $quotes);
	$sql = "INSERT INTO `storage` ( `storage_title`, `storage_content`, `storage_language`) VALUES ('$title', '$quotes', '$lang')";


	$result = $conn->query($sql);


	if ($result) {
		echo "success";
		//echo $sql;
	} //else {
		//echo $sql;
	//}



?>