"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = Navidad;
function FechaNavidad(fechaActual) {
	var anioActual = fechaActual.getFullYear();
	var anio = anioActual;

	if (fechaActual.getMonth() === 11) {
		if (fechaActual.getDate() > 25) {
			anio = anio + 1;
		}
	}

	return new Date(anio + "/12/25");
}

function Navidad() {
	var fechaActual = new Date(),
	    fechaNavidad = FechaNavidad(fechaActual);

	var aFecha = Date.parse(fechaActual),
	    nFecha = Date.parse(fechaNavidad),
	    diasMili = nFecha - aFecha,
	    cantidadDias = Math.floor(diasMili / (1000 * 60 * 60 * 24) + 1);

	return cantidadDias;
}