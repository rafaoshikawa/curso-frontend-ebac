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
    .then(function (json) {
      // Exibe os dados obtidos no console, fica melhor para escolher que dados vamos pegar
      console.log(json);

      // Atualiza os elementos HTML com os dados obtidos
      name.innerHTML = json.name;
      username.innerHTML = "@" + json.login;
      bio.innerHTML = json.bio;
      reposit.innerHTML = json.public_repos;
      followers.innerHTML = json.followers;
      following.innerHTML = json.following;
      avatar.src = json.avatar_url;
      link.href = json.html_url;
    })
    .catch(function (error) {
      console.error("Erro ao obter dados:", error);
    });
});
