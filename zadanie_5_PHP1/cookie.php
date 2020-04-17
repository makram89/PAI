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


setcookie("ciasteczkowy", "casteczkol_orzechowe", time() + (86400 * 30), "/");
?>

<a href="index.php">wroc do index</a><br>
</body