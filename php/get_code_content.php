<?php
	include_once "connection.php";


	$cid = $_POST['code_id'];

	$sql = "SELECT * FROM storage  WHERE storage_id = '".$cid."'";
	$result = $conn->query($sql);

	$data = $result->fetch_assoc();

	echo $data['storage_content'];


?>