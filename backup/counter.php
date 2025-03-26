<?php
/* 
 * counter unique hit with cookie
 * 
 */

$fp = fopen("log", "r");
$count = fread($fp, 1024);
fclose($fp);
$count = $count + 1;
echo $count." visitors";

if(!isset($_COOKIE["erz"])){
    setcookie("erz");
    $fp = fopen("log", "w");
    fwrite($fp, $count);
    fclose($fp);
}

?>
