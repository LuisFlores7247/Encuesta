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
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300&display=swap" rel="stylesheet" />
</head>

<header>
  <img src="assets/logo_muni.png" />
  <?php
  session_start();
  if (isset($_SESSION['nombre'])) {
    echo '<span><h3>Bienvenido, ' . $_SESSION['nombre'] . '</h3></span>';
  } else {
    header("location: index.html");
  }
  ?>
</header>

<body>
  <div class="app">
    <h1>Encuesta de Estrés Laboral</h1>
    <div class="instruccion-container">
      <h3 id="instruccion"></h3>
    </div>
    <div class="quiz">
      <h2 id="question">Pregunta numero uno?</h2>
      <div id="answer-buttons">
        <button class="btn">Muy mal</button>
        <button class="btn">Mal</button>
        <button class="btn">Regular</button>
        <button class="btn">Bien</button>
        <button class="btn">Muy bien</button>
      </div>
      <button id="next-btn" type="submit">Siguiente</button>
    </div>
  </div>
  <script src="js/script.js"></script>
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