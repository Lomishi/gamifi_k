<?php
 $servidor="localhost";
 $usuario="root";
 $contrasena="usbw";
 $bd="gamifi-k";


 $con=mysqli_connect($servidor,$usuario,$contrasena,$bd) or die(mysql_error());

 if (!$con){
   die("No se ha realizado la conexion").mysqli_connect_error());
 }
 else{
   mysql_set_charset($con, "utf8");
   echo "Te has conectado a la BD". "<br>";
 }

?>
