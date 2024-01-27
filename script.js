//capturar a lista pelo ul
$(document).ready(function () {
  var taskList = $("#task-list");

  //previnir o comportamento padrao do formulario que atualiza a pagina quando é submetido
  $("form").on("submit", function (e) {
    e.preventDefault();

    //recuperamos o valor do input text
    const inputTarefa = $("#task").val();

    const novaTarefa = $("<li></li>"); //vai inserir um li no html

    /* aqui vamos inserir um tag p no html juntamente com o valor do input text e concatenar
  dentro do nosso li na nossa variavel novaTarefa/ */
    $(`<p> ${inputTarefa} </p>`).appendTo(novaTarefa);

    /* aqui pegamos entao a nossa novaTarefa já com o DOM modificado e acrescentamos 
	dentro da tag ul  */
    $(novaTarefa).appendTo("ul");

    //para limpar o campo do formulario
    $("#task").val("");

    // Adiciona um efeito de risco nas tarefas concluídas ao clicar
    taskList.on("click", "li", function () {
      $(this).toggleClass("completed");

      /* $(this).toggleClass('completed');:

	$(this): vai criar um objeto jQuery a partir do elemento que acionou o evento, ou seja, 
	o <li> específico que foi clicado.
	.toggleClass('completed'); 
	Alterna a presença da classe CSS, ou seja, ele ativa ou desativa.
	o "completed" foi declarado no CSS como li.completed e passado a estilização de line-through  */
    });
  });
});
