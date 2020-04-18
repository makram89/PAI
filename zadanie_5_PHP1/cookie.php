<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>PHP</title>
    <meta charset='UTF-8' />
</head>
<body>
<?php
require_once("funkcje.php");
echo "Zalogowano";
?>

<?php
if(isset($_GET["czas"]))
{
    setcookie("ciasto", "custum_cookie",  time()+5, "/");
    echo "<br>Czas cookie:". $_COOKIE["ciasto"];
}

?>

<a href="index.php">wroc do index</a><br>
</body