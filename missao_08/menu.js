//ABRIR MENU
const openMenu = () => {
	var menu = document.getElementsByClassName('menu')[0]
	menu.classList.remove('hidden')
	menu.classList.add('visible')
	
	var menu = document.getElementsByClassName('btn-close')[0]
	menu.classList.remove('hidden')
	menu.classList.add('visible')
}


//FECHAR MENU
const closeMenu = () => {
	if (window.outerWidth >= 1024) {
		return;
	}
	
	var menu = document.getElementsByClassName('menu')[0]
	menu.classList.remove('visible')
	menu.classList.add('hidden')
	
	var menu = document.getElementsByClassName('btn-close')[0]
	menu.classList.remove('visible')
	menu.classList.add('hidden')
}

//ATRIBUIR COMPORTAMENTO NOS BOTÕES
document.getElementsByClassName('btn-menu')[0].onclick = openMenu
document.getElementsByClassName('btn-close')[0].onclick = closeMenu

let links = document.querySelectorAll('.menu ul li a')
for (let i = 0; i < links.length; i++) {
	links[i].onclick = closeMenu
}

if (window.innerWidth < 1024) {
	document.getElementsByClassName('menu')[0].classList.add('hidden')
}