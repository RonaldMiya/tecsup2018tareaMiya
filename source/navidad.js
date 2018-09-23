function FechaNavidad(fechaActual) {
	const anioActual = fechaActual.getFullYear()
	let anio = anioActual

	if (fechaActual.getMonth() === 11) {
		if (fechaActual.getDate() > 25) {
			anio = anio + 1
		}
	}

	return new Date(`${anio}/12/25`)
}

export default function Navidad() {
	let 	fechaActual = new Date(),
			fechaNavidad = FechaNavidad(fechaActual)
	
	let aFecha = Date.parse(fechaActual),
		nFecha = Date.parse(fechaNavidad),
		diasMili = nFecha - aFecha,
		cantidadDias = Math.floor(diasMili / (1000 * 60 * 60 * 24) + 1)

	return cantidadDias
}