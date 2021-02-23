<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonProfesor = json_decode($texto);
echo($texto);

if(!$jsonProfesor){
  exit("No hay datos");
}
$sql="SELECT nick FROM `registro_profesor` WHERE  nick='$jsonProfesor->nick'";
$result = mysqli_query($con,$sql);
if(!$result){
  die("no se a podido hacer el select");
}

  $sentencia ="INSERT INTO `registro_profesor`(`nick`, `email`, `pwd`, `nombre`, `apellidos`, `centro`) VALUES ('$jsonProfesor->nick',
                                                                                                                '$jsonProfesor->email',
                                                                                                                '$jsonProfesor->pwd',
                                                                                                                '$jsonProfesor->nombre',
                                                                                                                '$jsonProfesor->apellidos',
                                                                                                                '$jsonProfesor->centro')";
  $res = mysqli_query($con,$sentencia);

  if (!$res){
    die("No se ha podido crear el profe");
}
?>



















