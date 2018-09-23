export default function isString (str) {
	const expRegString = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
	return expRegString.test(str)
}
