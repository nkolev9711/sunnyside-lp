let menuBtn = document.querySelector(".fa-bars")
let ul = document.querySelector(".nav-ul")

menuBtn.addEventListener('click', () => {
	ul.classList.toggle("toggleClass")
})