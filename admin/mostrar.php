<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Estres Laboral</title>
    <link rel="stylesheet" href="../css/style.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap" rel="stylesheet" />
</head>
<header>
    <a href="menu-admin.html">
        <img src="/assets/logo_muni.png" />
        <a href="/admin/menu-admin.html"><button class="ingresar">Volver</button>
        </a>
</header>

<body>
    <div class="search-box">
        <input type="text" id="search-input" placeholder="Buscar..." onkeyup="filterTable()" />
    </div>
    <div class="table" id="table-container">
        <?php
        $servername = "encuestas-ags.com";
        $username = "u368251569_gobags";
        $password = "od4ExKo*gqVm";
        $dbname = "u368251569_gob";
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Verificar la conexión
        if ($conn->connect_error) {
            die("Error en la conexión a la base de datos: " . $conn->connect_error);
        }

        $searchTerm = "";
        if (isset($_GET['search'])) {
            $searchTerm = $_GET['search'];
        }


        $searchTerm = "";
        if (isset($_GET['search'])) {
            $searchTerm = $_GET['search'];
        }

        $sql = "SELECT pr.idpreg_resp AS id, CONCAT(p.nombres, ' ', p.apellidop, ' ', p.apellidom) AS nombre, pg.pregunta AS pregunta, r.respuesta as respuesta FROM preg_resp pr INNER JOIN personas p ON pr.idpersona = p.idpersona JOIN preguntas pg ON pr.idpregunta = pg.idpregunta INNER JOIN respuestas r ON pr.idrespuesta = r.idrespuesta ORDER BY id ASC";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            echo "<table id='table'>";
            echo "<tr><th>Id</th><th>Nombre</th><th>Pregunta</th><th>Respuesta</th></tr>";
            while ($row = $result->fetch_assoc()) {
                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["nombre"] . "</td>";
                echo "<td>" . $row["pregunta"] . "</td>";
                echo "<td>" . $row["respuesta"] . "</td>";
                echo "</tr>";
            }
            echo "</table>";
        } else {
            echo "No se encontraron resultados.";
        }
        $conn->close();


        ?>
    </div>
    <script src="/js/buscador.js"></script>
</body>
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

</html>