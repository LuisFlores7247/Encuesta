<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Estres Laboral</title>
    <link rel="stylesheet" href="css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap" rel="stylesheet" />
</head>

<body>
    <header>
        <img src="assets/logo_muni.png" />
        <?php
        session_start();
        if (isset($_SESSION['nombre'])) {
            echo '<span>
            <h3>Bienvenido, ' . $_SESSION['nombre'] . '</h3>
        </span>';
        } else {
            header("location: index.html");
            exit;
        }
        ?>
    </header>

    <div class="centrar">
        <h1>Gracias</h1>
        <h3>Has concluido la encuesta satisfactoriamente</h3>

        <?php
        $servername = "encuestas-ags.com";
        $username = "u368251569_gobags";
        $password = "od4ExKo*gqVm";
        $dbname = "u368251569_gob";

        if (isset($_SESSION['curp'])) {
            $curp = $_SESSION['curp'];
        } else {
            echo "No se encontró el valor de la CURP en la sesión.";
            exit;
        }

        // if (!isset($_POST['respuestas']) || count($_POST['respuestas']) !== 33) {
        //     header("Location: encuesta.php");
        //     exit;
        // }

        $respuestas = $_POST['respuestas'];
        $respuestas = json_decode($respuestas);

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        $sql = "SELECT idpersona FROM personas WHERE curp = '$curp'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $id = $row['idpersona'];

            for ($indice = 0; $indice <= 32; $indice++) {
                if ($indice < 12) {
                    $respuesta = $respuestas[$indice];
                    $sql = "INSERT INTO preg_resp (idpersona, idpregunta, idrespuesta) VALUES ('$id', " . ($indice + 1) . ", '$respuesta')";
                    $conn->query($sql);
                } else {
                    $respuesta = $respuestas[$indice];
                    $sql = "INSERT INTO preg_resp (idpersona, idpregunta, idrespuesta) VALUES ('$id', '" . ($indice + 1) . "', 'p" . ($indice - 11) . "r" . $respuesta . "')";
                    $conn->query($sql);
                }
            }
        } else {
            echo "No se encontró el ID de persona correspondiente al CURP.";
        }

        $conn->close();
        ?>

        <form action="index.html" method="POST" class="form-terminar">
            <button type="submit" name="terminar" class="ingresar">Terminar</button>
        </form>

    </div>

    <footer>
        <p>
            H. Ayuntamiento de Aguascalientes 2021 - 2024. Plaza Patria S/N, Zona
            Centro, Aguascalientes, Ags. CP. 20000.
        </p>
        <p>
            Marca al 072 o 4499101072 / 365 días / 24 horas | Atención vía WhatsApp
            whatsApp 4495089898 | Tel. 4499101010
        </p>
    </footer>

</body>

</html>