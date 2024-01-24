const form = document.getElementById("form");
const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

/* alterando o evento de submissao do usuario para remover o reload da pagina*/
form.addEventListener("submit", function (e) {
  e.preventDefault(); //o preventDefault serve para nao dar reload na pagina caso o usuario clique no butao submit
  const messageNumber1 = `O número do Campo A ( ${number1.value} ) é maior que o número do Campo B ( ${number2.value} )`;
  const messageNumber2 = `O número do Campo B ( ${number2.value} ) é maior que o número do Campo A ( ${number1.value} )`;
  const sameNumber = `Os números do Campo A ( ${number1.value} ) e Campo B ( ${number2.value} ) são iguais`;
  const messageContainer = document.querySelector(".message");
  const button = document.getElementById("button");
  const buttonRefresh = document.querySelector(".button-refresh");

  //validando o formulario dentro desse eventlistener, senão o botao nao teria funcionalidade
  if (number1.value > number2.value) {
    messageContainer.innerHTML = messageNumber1;
    messageContainer.style.display = "block";
    button.style.display = "none";
    buttonRefresh.style.display = "block";
  } else if (number2.value > number1.value) {
    messageContainer.innerHTML = messageNumber2;
    messageContainer.style.display = "block";
    button.style.display = "none";
    buttonRefresh.style.display = "block";
  } else {
    messageContainer.innerHTML = sameNumber;
    messageContainer.style.display = "block";
    button.style.display = "none";
    buttonRefresh.style.display = "block";
  }
});
