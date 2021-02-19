<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$jsonProfesor=json_decode(file_get_contents("php://input"));


// $sentencia ="INSERT INTO `registro_profesor`(`nick`, `email`, `pwd`, `nombre`, `apellidos`, `centro`) VALUES ('aaaawd','awd@awd.cm','awd','awd','awd','awd')";
// $res = mysqli_query($con,$sentencia);

if(!$jsonProfesor){
  exit("No hay datos");
}


  $sentencia = $database -> prepare("INSERT INTO registro_profesor
  VALUES (nick,email,pwd,nombre,apellidos,centro) VALUES ('$jsonProfesor->nick',
                                                    '$jsonProfesor->email',
                                                    '$jsonProfesor->pwd',
                                                    '$jsonProfesor->nombre',
                                                    '$jsonProfesor->apellido',
                                                    '$jsonProfesor->centro')");
  $res = mysqli_query($con,$sentencia);

  if (!$res){
    die("No se ha podido crear el profe");
}else{
  //me lleva al login para que pruebe mi contraseña
  echo "<script>alert('Profesors creado correctamente');</script>";
  include_once("login.php");
}

// $resultado=$sentencia->execute([$jsonProfesor->nick,
//                                 $jsonProfesor->email,
//                                 $jsonProfesor->pwd,
//                                 $jsonProfesor->nombre,
//                                 $jsonProfesor->apellido,
//                                 $jsonProfesor->centro]);

echo json_encode($jsonProfesor);



?>



















