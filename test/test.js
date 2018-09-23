const expect = require('chai').expect
const index = require('..')

describe('#index', function() {
	it('Calcula la cantidad de días restantes para navidad desde el día actual', function() {
		const translation = index.navidad()
		expect(translation).to.equal(93)
	})
	it('Calcula la cantidad de años de una persona, esta se calculará dependiendo de la fecha de nacimiento ingresada', function(){
		const translation = index.edad('1998/11/26')
		expect(translation).to.equal(19)
	})

	it('Valida si se tiene más dos nombres, solo se pueden ingresar letras', function() {
		const translation = index.isName('Cristiano Ronaldo')
		expect(translation).to.equal(true)
	})

	it('Valida si la cadena ingresada solo contiene letras', function() {
		const translation = index.isString('Ejemplo')
		expect(translation).to.equal(true)
	})

	it('Válida si es un número', function() {
		const translation = index.isNumber(2018)
		expect(translation).to.equal(true)
	})

	it('Valida si es un número de celular, este debe de poseer 9 dígitos y puede contener prefijos', function() {
		const translation = index.isNumberPhone("+51 950999999")
		expect(translation).to.equal(true)
	})

	it('Valida si el datos ingresado es un decimal de dos dígitos como máximo', function() {
		const translation = index.isDecimal(9.222)
		expect(translation).to.equal(false)
	})

	it('Valida si la contraseña posee entre 8 y 15 caracteres, por lo menos una letra en mayúscula, minúscula, un número y un caracter especial', function() {
		const translation = index.password('Test123@')
		expect(translation).to.equal(true)
	})

	it('Valida si el url ingresada es correcta, admite https y http', function() {
		const translation = index.isUrl('https://www.google.com')
		expect(translation).to.equal(true)
	})

	it('Valida si el dato ingresado es una fecha válida, la separación puede ser con "-" o "/". Esta fecha puede estaer entre el siglo XX y XXI', function() {
		const translation = index.isDate('12/12/1995')
		expect(translation).to.equal(true)
	})

	it('Valida si el dato ingresado es un correo electrónico valido', function() {
		const translation = index.isEmail('ejemplo.test@extension.edu.pe')
		expect(translation).to.equal(true)
	})

})