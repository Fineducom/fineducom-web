const months = [
	'Enero',
	'Febrero',
	'Marzo',
	'Abril',
	'Mayo',
	'Junio',
	'Julio',
	'Agosto',
	'Septiembre',
	'Octubre',
	'Noviembre',
	'Diciembre',
]

const range = document.getElementById('months')
const label = document.getElementById('month-label')
range.addEventListener('input', function () {
	label.innerHTML = months[range.value - 1]
})
