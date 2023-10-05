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
$contrasena = $_POST['contrasena'];

$sql = "select * from administradores where curp = '$curp' and contrasena = '$contrasena'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $nombre = $row['nombre'];
  session_start();
  $_SESSION['nombre'] = $nombre;
  header('Location: menu-admin.html');
} else {
  header('Location: login-admin.html?error=Curp y/o contraseña incorrectas');
}

$conn->close();
