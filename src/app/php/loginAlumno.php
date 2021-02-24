<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");


$texto = file_get_contents("php://input");
$jsonAlumno = json_decode($texto);
echo "$texto";

if(!$jsonAlumno){
  exit("No hay datos");
}

$instruccion ="SELECT count(*) AS cuantos FROM registro_alumno WHERE nick = '$jsonAlumno->nick'";
$resultado = mysqli_query($con, $instruccion);

while ($fila = $resultado->fetch_assoc()) {
  $numero=$fila["cuantos"];
}
if($numero==0){
  echo('{ "result": "ERROR1" }');
}
else{
$instruccion = "SELECT pwd AS cuantos FROM registro_alumno WHERE nick = '$jsonAlumno->nick'";
$resultado = mysqli_query($con, $instruccion);

while ($fila = $resultado->fetch_assoc()) {
  $pwd2=$fila["cuantos"];
}


	if (($pwd2 , $pass) == 0){
    echo('{ "result": "ERROR2" }');
	}

	else{
      echo('{ "result": "OK" }');

  }
}

?>
