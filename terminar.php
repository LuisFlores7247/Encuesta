<?php
$servername = "encuestas-ags.com";
$username = "u368251569_gobags";
$password = "od4ExKo*gqVm";
$dbname = "u368251569_gob";

session_start();
if (isset($_SESSION['curp'])) {
    $curp = $_SESSION['curp'];
}
$respuestas = $_POST['respuestas'];

$respuestas = json_decode($respuestas);

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$sql = "SELECT idpersonas FROM personas where curp = '$curp'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $id = $row['idpersonas'];
    echo $id;
}

for ($i = 1; $i <= 12; $i++) {
    $respuesta = $conn->real_escape_string($_POST['respuestas'][$i]);
    $sql = "INSERT INTO preg_resp (idpersona, idpregunta, idrespuesta) VALUES ('$id', '$i', '$respuesta')";
    echo "$sql";
    $conn->query($sql);
}

$conn->close();
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_destroy();
//header("Location: index.html");
