<?php session_start();


?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP</title>
    <meta charset='UTF-8'/>
</head>
<body>
<?php
require_once("funkcje.php");
if ($_SESSION["zalogowany"] != 1) {
    echo $_SESSION["zalogowany"];
    header("Location: index.php");
}
echo "<p>Zalogowano<br></p>";

echo "<p>" . $_SESSION["zalogowanyImie"] . "</p>";


?>
<form method="post" action="index.php">
    <label for="wyloguj">Log out button</label>
    <input type="submit" name="wyloguj" value="wyloguj">

</form>
<form method="post" enctype='multipart/form-data'>
    <fieldset><label for="myfile">Place to upload file</label>
    <input type="file" name="myfile">
        <label for="sendfile"> button o submit sending file</label>
    <input type="submit" value="Upload" name="sendfile"> <br/>
    </fieldset>

</form>
<?php

if (isset($_POST['sendfile'])) {
    $filepath = $_FILES["myfile"]["name"];
    if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $filepath)) {
        echo "<img src=".$filepath." height=200 width=300 /><br>";
    } else {
        echo "No file !! <br>";
    }
}
?>


<a href="index.php">hiperłącze do index</a>
</body>
</html>