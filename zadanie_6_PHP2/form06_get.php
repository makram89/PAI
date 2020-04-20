<?php session_start(); ?>
<?php
$link = mysqli_connect("localhost", "scott", "tiger", "instytut");
if (!$link) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}
$sql = "SELECT * FROM pracownicy";
$result = $link->query($sql);
foreach ($result as $v) {
echo $v["ID_PRAC"]." ".$v["NAZWISKO"]."<br/>";
}
$result->free();
$link->close();

print<<<KONIEC
<a href="form06_post.php"> TU dodasz nowego pracownika!</a>
KONIEC;

if (isset($_SESSION["Success"]))
{
    echo "<br>".$_SESSION["Success"];
    session_unset();
}