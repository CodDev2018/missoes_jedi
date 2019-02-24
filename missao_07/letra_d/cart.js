var produtos = []
var adicinarProduto = function() {
	var nome = document.getElementById('inputNome')
	var qtde = document.getElementById('inputQtde')
	var preco = document.getElementById('inputPrecoUn')
	
	if (!nome.value) {
		alert('Nome do produto deve ser preenchido')
		nome.focus()
		return
	}
	
	if (!qtde.value) {
		alert('Quantidade do produto deve ser preenchida')
		qtde.focus()
		return
	}
	
	if (!preco.value) {
		alert('Preço unitário do produto deve ser preenchido')
		preco.focus()
		return
	}
	
	let produto = {
		nome: nome.value,
		qtde: parseInt(qtde.value),
		preco: parseFloat(preco.value)
	}
	
	nome.value = null
	qtde.value = null
	preco.value = null
	nome.focus()
	
	produtos.push(produto)

	mostrarProdutos(produtos)
	totalizar(produtos)
}

var mostrarProdutos = function(produtos) {
	var cartBody = document.getElementById('cart-body')
	Array.from(cartBody.children).forEach( row => {
		if (row.id !== 'cart-form') {
			cartBody.removeChild(row)
		}
	})
	
	produtos.forEach(produto => {
		var row = document.createElement('tr')
		var colNome = document.createElement('td')
		colNome.appendChild(document.createTextNode(produto.nome))
		var colQtde = document.createElement('td')
		colQtde.appendChild(document.createTextNode(produto.qtde))
		var colPreco = document.createElement('td')
		colPreco.appendChild(document.createTextNode(produto.preco))
		var colTotal = document.createElement('td')
		colTotal.appendChild(document.createTextNode(produto.preco * produto.qtde))
		var colAcao = document.createElement('td')
		row.appendChild(colNome)
		row.appendChild(colQtde)
		row.appendChild(colPreco)
		row.appendChild(colTotal)
		row.appendChild(colAcao)		
		cartBody.appendChild(row)
	})	
}

var totalizar = function() {
	var total = 0
	produtos.forEach(produto => {
		total += produto.qtde * produto.preco
	})
	
	document.getElementById('card-total').innerHTML = total
}

document.getElementById('btn-enviar').addEventListener('click', adicinarProduto)