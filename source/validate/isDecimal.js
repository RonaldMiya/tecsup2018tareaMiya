export default function isDecimal (decimal) {
	const expRegDecimal = /^[0-9]+(\.[0-9]{1,2})?$/
	return expRegDecimal.test(decimal)
}