<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head><title>PHP</title>
    <meta charset='UTF-8'/>
    <?php
    require_once("funkcje.php");
    ?>
</head>
<body>
<?php
echo " <h1> Nasz system</h1>";
?>
<form method="post" action="logowanie.php">
    Login: <input type="text" name="login"><br>
    Password: <input type="text" name="password"><br>
    <input type="submit" name="send" value="Zaloguj">
</form>

<a href="user.php">hiperłącze do user</a>
<?php
if (isset($_POST["wyloguj"])) {
    $_SESSION["zalogowany"] = 0;
}
?>
<form method="get" action="cookie.php">
    Time: <input type="number" name="czas"><br>
    <label for="utworzCookie">Button to create cookie</label>
    <input type="submit" name="utworzCookie" value="cookie_plus">
</form>
<?php
if (isset($_GET["utworzCookie"])) {
    header("Location: cookie.php");
}
?>
</body>
</html>