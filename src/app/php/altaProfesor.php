<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$data=file_get_contents("php://input");
$jsonProfesor = json_decode($data);
echo $jsonProfesor;




if(!$jsonProfesor){
  exit("No hay datos");

}

$database=require_once 'database.php';
$sentencia = $database -> prepare("INSERT INTO registro_profesor
VALUES (nick, email,pwd,nombre,apellidos,centro) VALUES ('$jsonProfesor->nick',
                                                        '$jsonProfesor->email',
                                                        '$jsonProfesor->pwd',
                                                        '$jsonProfesor->nombre',
                                                        '$jsonProfesor->apellido',
                                                        '$jsonProfesor->centro')");
// $resultado=$sentencia->execute([$jsonProfesor->nick,
//                                 $jsonProfesor->email,
//                                 $jsonProfesor->pwd,
//                                 $jsonProfesor->nombre,
//                                 $jsonProfesor->apellido,
//                                 $jsonProfesor->centro]);

echo json_encode([
  "resultado"=>$resultado
])

?>



















