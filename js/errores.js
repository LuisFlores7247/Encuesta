const urlParams = new URLSearchParams(window.location.search);

if (urlParams.has("error")) {
  const error = urlParams.get("error");

  const errorMessageElement = document.getElementById("error-message");
  errorMessageElement.textContent = error;
  errorMessageElement.style.display = "block";
}

if (urlParams.has("concluido")) {
  const concluido = urlParams.get("concluido");

  const MessageElement = document.getElementById("concluido");
  MessageElement.textContent = concluido;
  MessageElement.style.display = "block";
}