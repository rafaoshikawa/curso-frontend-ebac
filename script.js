$(document).ready(function () {
  // Oculta o menu hamburguer inicialmente
  $(".menu-hamburguer").hide();

  // Toggle do menu hamburguer ao clicar na linha
  $(".menu-hamburguer-line").click(function () {
    $(".menu-hamburguer").fadeToggle();
  });

  // Fechar o menu se clicar no X
  $(".menu-close").click(function () {
    $(".menu-hamburguer").fadeOut();
  });

  // Fechar o menu se clicar em um link
  $(".menu-hamburguer a").click(function () {
    $(".menu-hamburguer").fadeOut();
  });

  // Aplicar a máscara ao campo de telefone usando a classe
  $(".telefone").mask("(00) 00000-0000");

  //validar o formulário, opcional, pois podemos usar o required no html
/*   $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, insira o seu nome",
      email: "Por favor, insira o seu email",
      email: "Por favor, insira o seu telefone",
    },
  }); */

  $(".produtos-card a").click(function () {
    const destino = $("#produto");
    const nomeProduto = $(this).parent().find("p").text();

    $("#produto").val(nomeProduto);

    $("html").animate(
      {
        scrollTop: destino.offset().top
      },1000);
  });
});
