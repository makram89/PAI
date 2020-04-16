<!DOCTYPE html>
<html>
<head><title>PHP</title>
    <meta charset='UTF-8'/>
</head>
<body>
<?php
echo " <h1> Nasz system</h1>";
?>
<form method="post">
    Login: <input type="text" name="login"><br>
    Password: <input type="text" name="password"><br>
    <input type="submit" name="send" value="Zaloguj" >
</form>
<?php
if(isSet($_POST["send"]))
{
    $login = $_POST["login"];
    $password = $_POST["password"];
    echo $login . " " . $password;
}
?>
</body>
</html>