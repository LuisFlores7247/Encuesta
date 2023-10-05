const questions = [
  {
    question: "Imposibilidad de conciliar el sueño.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Jaquecas y dolores de cabeza.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Indigestiones y molestias gastrointestinales.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Sensación de cansancio extremo o agotamiento.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Tendencia de comer, beber o fumar más de lo habitual.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Disminución del interés sexual.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Respiración entrecortada o sensación de ahogo.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Disminución del apetito.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Temblores musculares (por ejemplo tics nerviosos o parpadeos)",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question:
      "Pinchazos o sensaciones dolorosas en distintas partes del cuerpo.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Tentaciones fuertes de no levantarse por la mañana.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Tendencias a sudar o palpitaciones.",
    instruccion:
      "De los siguientes síntomas, selecciona el grado experimentado durante los últimos 3 meses de acuerdo al semáforo presentado",
    answers: [
      { text: "Nunca" },
      { text: "Casi nunca" },
      { text: "Pocas veces" },
      { text: "Algunas veces" },
      { text: "Relativamente frecuente" },
      { text: "Muy frecuente" },
    ],
  },
  {
    question: "Tristeza",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No me siento triste." },
      { text: "Me siento triste gran parte del tiempo." },
      { text: "Me siento triste todo el tiempo." },
      {
        text: "Me siento tan triste o soy tan infeliz que no puedo soportarlo.",
      },
    ],
  },
  {
    question: "Pesimismo",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No estoy desalentado respecto de mi futuro." },
      {
        text: "Me siento más desalentado respecto de mi futuro que lo que solía estarlo.",
      },
      { text: "No espero que las cosas funcionen para mí." },
      {
        text: "Siento que no hay esperanza para mi futuro y que solo puede empeorar.",
      },
    ],
  },
  {
    question: "Fracaso",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No me siento como un fracasado." },
      { text: "He fracasado más de lo que hubiera debido." },
      { text: "Cuando miro hacia atrás, veo muchos fracasos." },
      { text: "Siento que como persona soy un fracaso total." },
    ],
  },
  {
    question: "Pérdida de Placer",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      {
        text: "Obtengo tanto placer como siempre por las cosas de las que disfruto.",
      },
      { text: "No disfruto tanto de las cosas como solía hacerlo." },
      { text: "Obtengo muy poco placer de las cosas que solía disfrutar." },
      {
        text: "No puedo obtener ningún placer de las cosas de las que solía disfrutar.",
      },
    ],
  },
  {
    question: "Sentimientos de Culpa",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No me siento particularmente culpable." },
      {
        text: "Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.",
      },
      { text: "Me siento bastante culpable la mayor parte del tiempo." },
      { text: "Me siento culpable todo el tiempo." },
    ],
  },
  {
    question: "Sentimientos de Castigo",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No siento que este siendo castigado." },
      { text: "Siento que tal vez pueda ser castigado." },
      { text: "Espero ser castigado." },
      { text: "Siento que estoy siendo castigado." },
    ],
  },
  {
    question: "Disconformidad con uno mismo",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "Siento acerca de mí lo mismo que siempre." },
      { text: "He perdido la confianza en mí mismo." },
      { text: "Estoy decepcionado conmigo mismo." },
      { text: "No me gusto a mí mismo." },
    ],
  },
  {
    question: "Autocrítica",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No me critico ni me culpo más de lo habitual." },
      { text: "Estoy más crítico conmigo mismo de lo que solía estarlo." },
      { text: "Me critico a mí mismo por todos mis errores." },
      { text: "Me culpo a mí mismo por todo lo malo que sucede." },
    ],
  },
  {
    question: "Pensamientos o Deseos Suicidas",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No tengo ningún pensamiento de matarme." },
      { text: "He tenido pensamientos de matarme, pero no lo haría." },
      { text: "Querría matarme." },
      { text: "Me mataría si tuviera la oportunidad de hacerlo." },
    ],
  },
  {
    question: "Llanto",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No lloro más de lo que solía hacerlo." },
      { text: "Lloro más de lo que solía hacerlo." },
      { text: "Lloro por cualquier pequeñez." },
      { text: "Siento ganas de llorar pero no puedo." },
    ],
  },
  {
    question: "Agitación",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No estoy más inquieto o tenso que lo habitual." },
      { text: "Me siento más inquieto o tenso que lo habitual." },
      {
        text: "Estoy tan inquieto o agitado que me es difícil quedarme quieto.",
      },
      {
        text: "Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.",
      },
    ],
  },
  {
    question: "Pérdida de Interés",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No he perdido el interés en otras actividades o personas." },
      { text: "Estoy menos interesado que antes en otras personas o cosas." },
      { text: "He perdido casi todo el interés en otras personas o cosas." },
      { text: "Me es difícil interesarme por algo." },
    ],
  },
  {
    question: "Indecisión",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "Tomo mis propias decisiones tan bien como siempre." },
      { text: "Me resulta más difícil que de costumbre tomar decisiones." },
      {
        text: "Encuentro mucha más dificultad que antes para tomar decisiones.",
      },
      { text: "Tengo problemas para tomar cualquier decisión." },
    ],
  },
  {
    question: "Desvalorización",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No siento que yo no sea valioso." },
      {
        text: "No me considero a mí mismo tan valioso y útil como solía considerarme.",
      },
      { text: "Me siento menos valioso cuando me comparo con otros." },
      { text: "Siento que no valgo nada." },
    ],
  },
  {
    question: "Pérdida de Energía",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "Tengo tanta energía como siempre." },
      { text: "Tengo menos energía que la que solía tener." },
      { text: "No tengo suficiente energía para hacer demasiado." },
      { text: "No tengo energía suficiente para hacer nada." },
    ],
  },
  {
    question: "Cambios en los Hábitos de Sueño",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No he experimentado ningún cambio en mis hábitos de sueño." },
      {
        text: "Duermo un poco más que lo habitual. / Duermo un poco menos que lo habitual.",
      },
      {
        text: "Duermo mucho más que lo habitual. / Duermo mucho menos que lo habitual.",
      },
      {
        text: "Duermo la mayor parte del dia. / Me despierto 1-2 horas mas temprano y no puedo volver a dormirme",
      },
    ],
  },
  {
    question: "Irritabilidad",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No estoy tan irritable que lo habitual." },
      { text: "Estoy más irritable que lo habitual." },
      { text: "Estoy mucho más irritable que lo habitual." },
      { text: "Estoy irritable todo el tiempo." },
    ],
  },
  {
    question: "Cambios en el Apetito",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No he experimentado ningún cambio en mi apetito." },
      {
        text: "Mi apetito es un poco menor que lo habitual. / Mi apetito es un poco mayor que lo habitual.",
      },
      {
        text: "Mi apetito es mucho mayor que lo habitual. / Mi apetito es mucho menor que lo habitual.",
      },
      { text: "No tengo apetito en absoluto / Quiero comer todo el día" },
    ],
  },
  {
    question: "Dificultad de Concentración",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "Puedo concentrarme tan bien como siempre." },
      { text: "No puedo concentrarme tan bien como habitualmente." },
      { text: "Me es difícil mantener la mente en algo por mucho tiempo." },
      { text: "Encuentro que no puedo concentrarme en nada." },
    ],
  },
  {
    question: "Cansancio o Fatiga",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No estoy más cansado o fatigado que lo habitual." },
      { text: "Me fatigo o me canso más fácilmente que lo habitual." },
      {
        text: "Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.",
      },
      {
        text: "Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer.",
      },
    ],
  },
  {
    question: "Pérdida de Interés Sexual",
    instruccion:
      "Luego elija uno de cada grupo, el que mejor describa el modo como se ha sentido las últimas dos semanas, incluyendo el día de hoy",
    answers: [
      { text: "No he experimentado ninguna pérdida de interés sexual." },
      { text: "Estoy menos interesado en el sexo de lo que solía estarlo." },
      { text: "Estoy mucho menos interesado en el sexo." },
      { text: "He perdido por completo el interés sexual." },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  nextButton.innerHTML = "Siguiente";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  const instruccionElement = document.getElementById("instruccion");
  instruccionElement.textContent = currentQuestion.instruccion;

  let i = 0;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");

    let numero = i + 1;
    let nuevoID = "btn-" + numero;
    button.id = nuevoID;
    answerButtons.appendChild(button);
    i++;
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

let respuestas = [];

function selectAnswer(e) {
  const selectedBtn = e.target;

  const buttons = document.querySelectorAll(".btn");
  selectedBtn.classList.add("selected");
  buttons.forEach((button) => {
    if (button !== selectedBtn) {
      button.classList.remove("selected");
    }
  });

  nextButton.style.display = "block";
}

function guardarRespuesta() {
  const selectedBtn = document.querySelector(".btn.selected");

  if (selectedBtn) {
    let numero = parseInt(selectedBtn.id.split("-")[1]);
    respuestas.push(numero);
    console.log(respuestas.join(', '));
  }
}

function handleNextButton() {
  guardarRespuesta();

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "/agradecimiento.php";

    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "respuestas";
    input.value = JSON.stringify(respuestas);
    form.appendChild(input);
    document.body.appendChild(form);

    form.submit();
  }
}

nextButton.addEventListener("click", handleNextButton);

startQuiz();
