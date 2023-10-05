<?php
$servername = "encuestas-ags.com";
$username = "u368251569_gobags";
$password = "od4ExKo*gqVm";
$dbname = "u368251569_gob";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$curp = $_POST['curp'];
$_SESSION['curp'] = $curp;
$apellidoP = $_POST['apellidoP'];
$apellidoM = $_POST['apellidoM'];
$nombres = $_POST['nombres'];
$institucion = $_POST['institucion'];

$sql = "INSERT INTO personas (curp, apellidop, apellidom, nombres, institucion) VALUES ('$curp', '$apellidoP', '$apellidoM', '$nombres', '$institucion')";

$errorMsg = '';

try {
    if ($conn->query($sql) === TRUE) {
        header("Location: menu-admin.html");
        exit;
    }
} catch (Exception $e) {
    $errorMsg = "Error al insertar los datos: " . $e->getMessage();
}

$conn->close();
?>

</html>