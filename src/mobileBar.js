const mobileBarBtn = document.querySelector('.header__mobile-bar')
const mobileBar = document.querySelector('.header__ul')
const mobileBarClose = document.querySelector('.header__mobile-close')
mobileBarBtn.addEventListener('click', e => {
	e.preventDefault()
	mobileBar.style.visibility = 'visible'
	document.querySelector('section').style.display = 'none'
})

mobileBarClose.addEventListener('click', e => {
	e.preventDefault()
	mobileBar.style.visibility = 'hidden'
	document.querySelector('section').style.display = 'block'
})
