const hamburger = document.getElementById('hamburger'),
	nav = document.getElementById('nav')

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('is-active')
	nav.classList.toggle('nav-active')
})