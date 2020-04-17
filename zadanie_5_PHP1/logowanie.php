<?php
session_start();
require("index.php");


if (isset($_POST["send"])) {
    $login = test_input($_POST["login"]);
    $password = test_input($_POST["password"]);
    echo $login . " " . $password;
}

if( $login == $osoba1->login and $password == $osoba1->haslo)
{

    $zalogowanyImie = $login;
    $zalogowany = 1;
    $_SESSION["zalogowany"] = $zalogowany;
    $_SESSION["zalogowanyImie"] = $osoba1->imieNazwisko;
    header("Location: user.php");
}
elseif ($login == $osoba2->login and $password == $osoba2->haslo)
{
    $zalogowanyImie = $login;
    $zalogowany = 1;
    header("Location: user.php");
}
else{
    header("Location: index.php");
}

?>
