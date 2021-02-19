<?php
require_once 'database.php';
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$data=file_get_contents("php://input");
$jsonProfesor = json_decode($data);





if(!$jsonProfesor){
  exit("No hay datos");

}


///////////////////////////////////////////////






$logueado = 0;

header("Content-Type: text/html;charset=utf-8");

$instruccion = "select count(*) as cuantos from registro_profesor where nick = '$jsonProfesor->nick'";
$resultado = mysqli_query($con, $instruccion);
while ($fila = $resultado->fetch_assoc()) {
	$numero = $fila["cuantos"];
}
if ($numero == 0) {
	header("Location: login.html?alert=El usuario no existe");
} else {
	$instruccion = "select pwd as cuantos , id from registro_profesor where nick = '$jsonProfesor->nick'";
	$resultado = mysqli_query($con, $instruccion);

	while ($fila = $resultado->fetch_assoc()) {
		$password2 = $fila["cuantos"];
		$id = $fila["id"];
	}

	// Si la contraseña es incorrecta
	if (!password_verify($password, $password2)) {
		header("Location: login.html?alert=Contraseña incorrecta");

	// Si la contraseña es correcta
	} else {
		echo "Login OK";
		 $nick;
		 $id;




	}
}
?>

