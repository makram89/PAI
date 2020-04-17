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
if (isset($_GET["utworzCookie"])) {
    header("Location: cookie.php");
}

setcookie("ciasteczkowy", "casteczkol_orzechowe", time() + (86400 * 30), "/");
?>

<a href="index.php">wroc do index</a><br>
</body