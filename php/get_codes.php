<?php
	include_once "connection.php";


	$lang = $_POST['language'];

	$sql = "SELECT * FROM storage  WHERE storage_language = '".$lang."'";
	$result = $conn->query($sql);

	while ($row = $result->fetch_assoc()) {
		echo "<option value='".$row['storage_id']."'>".$row['storage_title']."</option>";

	}


?>