const navidad = require("../dist/source/navidad")
const edad = require("../dist/source/edad")
const isName = require("../dist/source/validate/isName")
const isString = require("../dist/source/validate/isString")
const isEmail = require("../dist/source/validate/isEmail")
const isUrl = require("../dist/source/validate/isUrl")
const isDecimal = require("../dist/source/validate/isDecimal")
const isNumber = require("../dist/source/validate/isNumber")
const isNumberPhone = require("../dist/source/validate/isNumberPhone")
const password = require("../dist/source/validate/isPassword")
const isDate = require("../dist/source/validate/isDate")

if (typeof exports !== 'undefined') {
	if (typeof module !== 'undefined' && module.exports) {
		exports = module.exports = navidad.default
		exports = module.exports = edad.default
		exports = module.exports = isName.default
		exports = module.exports = isString.default
		exports = module.exports = isEmail.default
		exports = module.exports = isUrl.default
		exports = module.exports = isDecimal.default
		exports = module.exports = isNumber.default
		exports = module.exports = isNumberPhone.default
		exports = module.exports = password.default
		exports = module.exports = isDate.default
	}
	exports.navidad = navidad.default
	exports.edad = edad.default
	exports.isName = isName.default
	exports.isString = isString.default
	exports.isEmail = isEmail.default
	exports.isUrl = isUrl.default
	exports.isDecimal = isDecimal.default
	exports.isNumber = isNumber.default
	exports.isNumberPhone = isNumberPhone.default
	exports.password = password.default
	exports.isDate = isDate.default
} else {
	root.navidad = navidad.default
	root.edad = edad.default
	root.isName = isName.default
	root.isString = isString.default
	root.isEmail = isEmail.default
	root.isUrl = isUrl.default
	root.isDecimal = isDecimal.default
	root.isNumber = isNumber.default
	root.isNumberPhone = isNumberPhone.default
	root.password = password.default
	root.isDate = isDate.default
}