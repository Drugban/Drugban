const TOKEN = '6436259795:AAG26FsDKky8PTSmMw2zPkFQ2xAORyP9owg'
const CHAT_ID = '-1002245638079'
const URI_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`

document.getElementById('form').addEventListener('submit', function (e) {
	e.preventDefault()
	let message = `<b>Заявка с сайта DrugBan.github.io</b>\n`
	message += `Отправитель: <b>${this.firstName.value} ${this.lastName.value}</b>\n`
	message += `Расположение: <b>${this.country.value} ${this.city.value} ${this.street.value}</b>\n`
	message += `Информация: <b>${this.email.value} ${this.phone.value}</b>\n`
	
  axios.post(URI_API,{
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })



  var inputs = this.querySelectorAll('input')
	for (var input of inputs) {
    input.value = ''
	}
})
