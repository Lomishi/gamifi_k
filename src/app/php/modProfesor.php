<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonProfesor = json_decode($texto);

if(!$jsonProfesor){
  exit("No hay datos");
}

  $sentencia ="UPDATE `registro_profesor` SET `pwd`='$jsonProfesor->pwd', `email`='$jsonProfesor->email', `nombre`='$jsonProfesor->nombre', `apellidos`='$jsonProfesor->apellidos', `centro`='$jsonProfesor->centro' WHERE 1 ";

  if ($res = mysqli_query($con,$sentencia)) {
    echo('{ "result": "OK" }');
  }

?>


