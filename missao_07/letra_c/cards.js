var toggleCard = function () {
	var cardBody = this.parentElement.parentElement.getElementsByClassName('card-body')[0]
	
	if (cardBody.style.display === "none") {
		cardBody.style.display = "block"
	} else {
		cardBody.style.display = "none"
	}
}

var cardHeaders = document.querySelectorAll('.card header h2')

cardHeaders.forEach(h2 => {
	h2.addEventListener('click', toggleCard)
})
