var canv = document.getElementById('canv')
var ctx = canv.getContext('2d')

canv.width = window.innerWidth
canv.height = window.innerHeight

ctx.shadowColor = 'rgb(16, 185, 129)'
ctx.shadowOffsetX = 0
ctx.shadowOffsetY = 0
ctx.shadowBlur = 50
ctx.fillStyle = 'rgba(16, 185, 129, 0.3)'
ctx.fillRect(0, 0, 0, 0)

canv.addEventListener('mousedown', function (e) {
	ctx.beginPath()
	ctx.arc(e.clientX, e.clientY, 40, 0, Math.PI * 2)
	ctx.fill()
})
