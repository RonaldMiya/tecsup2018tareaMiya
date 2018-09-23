export default function isNumber (num) {
	const expRegNumber = /^([0-9])*$/
	return expRegNumber.test(num)
}