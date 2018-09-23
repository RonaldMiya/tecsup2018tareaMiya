export default function isNumberPhone (phone) {
	const expRegMobile = /^(\+\d{1,3}[- ]?)?\d{9}$/
	return expRegMobile.test(phone)
}
