<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$jsonAlumno=json_decode(file_get_contents("php://input"));

if(!$jsonAlumno){
  exit("No hay datos");

}

$sentencia = $database -> prepare("INSERT INTO registro_alumno
VALUES (nick,email,pwd,nombre,apellidos) VALUES ('$jsonProfesor->nick',
                                                  '$jsonAlumno->email',
                                                  '$jsonAlumno->pwd',
                                                  '$jsonAlumno->nombre',
                                                  '$jsonAlumno->apellido')");

echo json_encode([
  "resultado"=>$resultado
])

?>
