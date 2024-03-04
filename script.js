document.addEventListener("DOMContentLoaded", function () {
  // primeiro buscar as variaveis do html
  const avatar = document.querySelector("#avatar");
  const name = document.querySelector("#name");
  const username = document.querySelector("#username");
  const bio = document.querySelector("#bio");
  const reposit = document.querySelector("#reposit");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const link = document.querySelector("#link");

  // criando uma variavel chamada apiURL com o URL do meu github e usando ela no fetch, poderia apagar ela e linkar esse url direto dentro do fetch sem problema algum
  const apiUrl = "https://api.github.com/users/rafaoshikawa";

  // Faz a requisição usando fetch
  fetch(apiUrl)
    .then(function (response) {
      /* "response" para indicar que se trata da resposta do servidor.  mas poderia ser qualquer nome*/
      return response.json();
    })
    .then(function (data) {
      // esse then tem comportamento de TRY
      // Exibe os dados obtidos no console, fica melhor para escolher que dados vamos pegar
      console.log(data);

      // Atualiza os elementos HTML com os dados obtidos
      name.innerHTML = data.name;
      username.innerHTML = "@" + data.login;
      bio.innerHTML = data.bio;
      reposit.innerHTML = data.public_repos;
      followers.innerHTML = data.followers;
      following.innerHTML = data.following;
      avatar.src = data.avatar_url;
      link.href = data.html_url;
    })
    .catch(function (error) {
      // Bloco executado se ocorrer um erro e o Finally é opcional mas seria depois desse bloco
      console.error("Erro ao obter dados:", error);
    });
});
