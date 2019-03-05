var validateContact = function() {
	var valido = true
	var notificacao = "Todos os campos devem ser informados."
	var formContact = document.forms['contactForm']
	var tipo = formContact['tipo']
	var nome = formContact['nome']
	var email = formContact['email']
	var mensagem = formContact['mensagem']
	
	if (tipo.value === "") {
		tipo.classList.add('invalid')
		valido = false
	}
	
	if (nome.value === "") {
		nome.classList.add('invalid')
		valido = false
	}
	
	if (email.value === "") {
		email.classList.add('invalid')
		valido = false
	}
	
	if (mensagem.value === "") {
		mensagem.classList.add('invalid')
		valido = false
	}
	
	if (!validateEmail(email.value)) {
		email.classList.add('invalid')
		
		if (valido) {
			notificacao = 'O email informado deve ser valido.'
		} else {
			notificacao += ' O email informado deve ser valido.'
		}
		
		valido = false
	}
	
	if (!valido) {
		document.getElementsByClassName('notificacoes')[0].innerHTML = notificacao
	}
	
	return valido
	
}

function validateEmail(email) {
	var re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	
	return re.test(email)
}