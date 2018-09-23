'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = CalcularEdad;
function Validar(fechaNacimiento) {
	var fechaActual = new Date();
	var respuesta = '';

	if (fechaNacimiento.getFullYear() > fechaActual.getFullYear()) {
		respuesta = 'Fecha erronea';
	} else if (fechaActual.getFullYear() == fechaNacimiento.getFullYear()) {
		if (fechaNacimiento.getMonth() > fechaActual.getMonth()) {
			respuesta = 'Fecha erronea';
		} else if (fechaNacimiento.getMonth() == fechaActual.getMonth()) {
			if (fechaNacimiento.getDate() > fechaActual.getDate()) {
				respuesta = 'Fecha erronea';
			}
		}
	}

	return respuesta;
}

function CalcularEdad(nacimiento) {
	var fechaActual = new Date();
	var fechaNacimiento = nacimiento;

	if ((typeof fechaNacimiento === 'undefined' ? 'undefined' : _typeof(fechaNacimiento)) != 'object') {
		fechaNacimiento = new Date(nacimiento);
	}

	var respuesta = Validar(fechaNacimiento);
	if (respuesta != '') {
		return respuesta;
	}

	var anios = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
	if (fechaNacimiento.getMonth() > fechaActual.getMonth()) {
		anios -= 1;
	} else if (fechaNacimiento.getMonth() == fechaActual.getMonth()) {
		if (fechaNacimiento.getDate() > fechaActual.getDate()) {
			anios -= 1;
		}
	}
	return anios;
}