function dateString(posDate) {
	if (typeof posDate == 'object') {
		posDate = posDate.toLocaleDateString('es-US')
	}
	return posDate
}

export default function isDate (date) {
	const expRegDate = /^(0?[1-9]|[12][0-9]|3[01])[\-/](0?[1-9]|1[012])[\-/](19|20)\d{2}$/
	let dateConvert = dateString(date)
	return expRegDate.test(dateConvert)
}