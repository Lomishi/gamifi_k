<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$texto = file_get_contents("php://input");
$jsonAlumno = json_decode($texto);

if(!$jsonAlumno){
  exit("No hay datos");
}

$instruccion ="SELECT count(*) AS cuantos FROM registro_alumno WHERE nick = '$jsonAlumno->nick'";
$result = mysqli_query($con, $instruccion);

while ($fila = $result->fetch_assoc()) {
    $numero=$fila["cuantos"];
}
  if($numero==0){
    echo('{ "result": "ERROR1" }');
  } else{
      $instruccion2 = "SELECT * FROM registro_alumno WHERE nick = '$jsonAlumno->nick'";
      $result2 = mysqli_query($con, $instruccion2);

      while ($fila = $result2->fetch_assoc()) {
        $pwd2=$fila["pwd"];
    }

// $datos = $result2->execute([$jsonAlumno->nick, $jsonAlumno->pwd, $jsonAlumno->email, $jsonAlumno->nombre, $jsonAlumno->apellido]);
// echo json_encode($datos);

  if($pwd2 === $jsonAlumno->pwd){
    echo('{ "result": "OK" }');

  } else{
    echo('{ "result": "ERROR2" }');
  }
}
