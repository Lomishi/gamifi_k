<?php
 $servidor="localhost";
 $usuario="root";
 $contrasena="usbw";
 $bd="gamifi-k";


 $con=mysqli_connect($servidor,$usuario,$contrasena,$bd) or die(mysql_error());
 if(!$con){
   die("No se ha podido realizar la conexion".mysqli_connect_error());
 }

 else{
   mysqli_set_charset($con,"utf8");
   echo "Te has conectado a la base de datos"."<br>";
 }


?>
