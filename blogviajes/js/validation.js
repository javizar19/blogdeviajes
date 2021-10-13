// Funcions de validació
function validateName(name) {
	const regex = /^[A-Za-z ]+$/;
	return regex.test(name);
}

function validateLlansament(llansament, format = "dd/mm/aaaa") {
	let regex = /^([0][1-9]|[12][0-9]|3[01])(\/|-)([0][1-9]|[1][0-2])\2(\d{4})$/;
	if (format == "dd-mm-aaaa")
		regex = /^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/;
	return regex.test(llansament);
}

function validatePegi(pegi) {
	const regex = /^[0-9]+$/;
	return regex.test(pegi);
}

function validateDesenvolupador(desenvolupador) {
	const regex = /^[A-Za-z ]+$/;
	return regex.test(desenvolupador);
}

function isValidAgePlayer(sDate, minAge) {
	let aDate = sDate.split("/"); // array: dia, mes año

	// JavaScript counts months from 0 to 11
	let bornDate = new Date(aDate[2], aDate[1] - 1, aDate[0]);

	let currentDate = new Date();
	let age = diffAnys(currentDate, bornDate);

	return (age >= minAge);

}
