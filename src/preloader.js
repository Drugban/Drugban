var preloader = document.getElementById('preloader')
var wrap = document.getElementById('wrap')
wrap.style.display = 'none'
document.body.onload = function () {
	setTimeout(function () {
		if (!preloader.classList.contains('load')) {
			preloader.classList.add('load')
			wrap.style.display = 'block'
		}
	}, 1)
}
