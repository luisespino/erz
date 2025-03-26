<?php
/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


    $fecha=time();
    $horas = +1;
    $fecha += ($horas * 60 * 60);

    $msg = $_REQUEST['comments']."\r\n\r\n";
    $msg.= "----------------------------------------------------------- \r\n";
    $msg.= "Generado por ERZ en ".$_SERVER[REMOTE_ADDR]." - ";
    $msg.= date('Y-m-d H:i:s',$fecha);

    require("class.phpmailer.php");
    $mail = new PHPMailer();

    if ($_REQUEST['email']=="") $email = $_SERVER[REMOTE_ADDR];
    else $email = $_REQUEST['email'];

    if ($_REQUEST['name']=="") $name = $_SERVER[REMOTE_ADDR];
    else $name = $_REQUEST['name'];

    $mail->From = $email;
    $mail->FromName = $name;
    $mail->Subject = 'ERZ: '.$_REQUEST['subject'];
    $mail->Body = $msg;

    $mail->AddAddress("luisespino@yahoo.com","ERZ Team");


    if (!$mail->Send()) echo '<script>alert("The message could not be sent.");</script><META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>';
    else echo '<script>alert("The message was sent.");</script><META HTTP-EQUIV=Refresh CONTENT=0;URL=index.php>';


?>
