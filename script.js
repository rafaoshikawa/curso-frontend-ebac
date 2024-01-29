  $(document).ready(function () { 

		//aplicando mascaras
		$("#telefone").mask("(00) 00000-0000");
		$("#cpf").mask("000.000.000-00");

		//validando o form
		$("form").validate({
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
				telefone: "Por favor, insira o seu telefone",
				cpf: "Por favor, insira o seu CPF",
			},
		}); 


	});
	// Aplicar a máscara ao campo de telefone usando a classe