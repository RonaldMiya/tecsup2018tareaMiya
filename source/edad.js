function Validar(fechaNacimiento) {
	const fechaActual = new Date()
	let respuesta = ''

	if (fechaNacimiento.getFullYear() > fechaActual.getFullYear()) {
		respuesta = 'Fecha erronea'
	} else if (fechaActual.getFullYear() == fechaNacimiento.getFullYear()){
		if (fechaNacimiento.getMonth() > fechaActual.getMonth()) {
			respuesta = 'Fecha erronea'
		} else if (fechaNacimiento.getMonth() == fechaActual.getMonth()) {
			if (fechaNacimiento.getDate() > fechaActual.getDate()) {
				respuesta = 'Fecha erronea'
			}
		}
	}

	return respuesta
}

export default function CalcularEdad(nacimiento) {
	const fechaActual = new Date()
	let fechaNacimiento = nacimiento

	if (typeof fechaNacimiento != 'object') {
		fechaNacimiento = new Date(nacimiento)
	}

	const respuesta = Validar(fechaNacimiento)
	if (respuesta != '') {
		return respuesta
	}

	let anios = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
	if (fechaNacimiento.getMonth() > fechaActual.getMonth()) {
		anios -= 1
	} else if (fechaNacimiento.getMonth() == fechaActual.getMonth()) {
		if (fechaNacimiento.getDate() > fechaActual.getDate()) {
			anios -= 1
		}
	}
	return anios
}