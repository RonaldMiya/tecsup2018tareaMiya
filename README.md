# Ronald Miya #

```bash
const ronaldmiya = require('ronaldmiya')

const navidad = ronaldmiya.navidad() //=> 93
const edad = ronaldmiya.edad('1996/12/21') //=> 21
const isString = ronaldmiya.isString('test') //=> true
const isName = ronaldmiya.isName('Test Name') //=> true
const isNumber = ronaldmiya.isNumber('20') //=> true
const isDecimal = ronaldmiya.isDecimal(20.100) //=> false
const isNumberPhone = ronaldmiya.isNumberPhone('+51 953953953') //=> true
const isEmail = ronaldmiya.isEmail('test@gmail.com') //=> true
const isDate = ronaldmiya.isDate('20/12/2018') //=> true
const isUrl = ronaldmiya.isUrl('https://github.com') //=> true
const password = ronaldmiya.password('Test123@') //=> true
```

# Instalación #

Este es un módulo [Node.js](https://nodejs.org/en/) disponible a través del registro [npm](https://www.npmjs.com/).

Antes de instalar, [descargar e instalar Node.js](https://nodejs.org/en/download/).

```bash
$ npm install
$ npm install ronaldmiya
```

## Características ##

El paquete permite:
> 1. Calcular la cantidad de días hasta navidad.
> 2. Calcular la edad de una persona habiendo ingresado su fecha de nacimiento.
> 3. Validar formularios.

## Pruebas ##

````bash
$ npm test
````

## Licencia ##
[MIT](https://opensource.org/licenses/MIT)

