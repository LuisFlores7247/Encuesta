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
$concluido = false;

$sql = "SELECT idpersona FROM personas where curp = '$curp'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $id = $row['idpersona'];
} else {
    echo "No se encontro el id";
}


$sql = "select * from preg_resp where idpersona = '$id'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $concluido = true;
}

$sql = "SELECT CONCAT(nombres, ' ', apellidop, ' ', apellidom) AS nombre FROM personas WHERE curp = '$curp'";
$result = $conn->query($sql);

if ($concluido) {
    header('Location: index.html?concluido=Has concluido la encuesta');
} else {
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $nombre = $row['nombre'];
        session_start();
        $_SESSION['nombre'] = $nombre;
        $_SESSION['curp'] = $curp;
        header('Location: /encuesta.php');
    } else {
        header('Location: index.html?error=Usuario no registrado');
    }
}

$conn->close();
