import { Employee } from './Employee.js';

const button = document.querySelector("#add-employee");

let eMaria = new Employee("43224211N" , "Maria", "Hernández Gómez" , "1990-10-15", "Administradora");
let eIvan = new Employee("4344211L" , "Ivan", "Fernández Balliu", "2000-10-15", "Publicador");
let eCristina = new Employee("36622183Z" , "Cristina", "Puig Major", "2001-10-15", "Ayudante");

let employeeList = [eMaria, eIvan, eCristina];


document.addEventListener("DOMContentLoaded", () => {
    populateEmployees();
});



button.addEventListener("click", () => {
    populateEmployees();


    let employee = new Employee(
        document.querySelector("#id-employee").value,
        document.querySelector("#name-employee").value,
        document.querySelector("#salary-employee").value,
        document.querySelector("#date-employee").value,
        document.querySelector("#rol-employee").value
    );

    employeeList.push(employee);
    populateEmployees();
});



function populateEmployees(){
    // ver que no haya duplicados.
    // no me funsiona gucci...
    // let idInput = document.querySelector("#id-employee").value
    // let nameInput = document.querySelector("#name-employee").value
    // console.log("comparacion");
    // if (employeeList.some(e => e.id == idInput || e.name== nameInput)){
    //     alert("ID existente");
    //     return false;
    // }
    const listTag = document.querySelector("#list");
    listTag.innerHTML="";
    employeeList.forEach(emp => {
        listTag.innerHTML+= `<form style="margin-bottom:30px; width: 400px; height:200px; border: 3px solid #555">
        <p>
        <label for=""><b>NIF</b></label>
        <span><b>${emp.id}</b></span><br>
        <label for=""><b>NOMBRE:</b></label>
        <span>${emp.name}</span><br>
        <label for=""><b>APELLIDOS:</b></label>
        <span>${emp.salary}</span><br>
        <label for=""><b>FECHA:</b></label>
        <span>${emp.date}</span><br>
        <label for=""><b>ROL:</b></label>
        <span>${emp.rol}</span>
        </p>
        </form>`;
    });
}

function validateForm(){
	// Get data from form using destuturing array technique
	const formGame = document.getElementById("add-employee");
	const [name, llansament, pegi, desenvolupador, genere] = formGame.elements;
	
	let txtCat = genere.options[genere.selectedIndex].value;

	if (!validateName(name.value) || name.value == "") {
		alert("nom erroni");
		return false;
	};

	if (!validateLlansament(llansament.value) || llansament.value == "") {
		alert("llansament erroni");
		return false;
	};

	if (!validatePegi(pegi.value) || pegi.value == "") {
		alert("pegi erroni");
		return false;
	};

	if (!validateDesenvolupador(desenvolupador.value) || desenvolupador.value == "") {
		alert("desenvolupador erroni");
		return false;
	};

	if (!isValidAgePlayer(date.value, 18) && txtCat === "PRO") {
		alert("La edat mínima per participar a la categoria professional són 18 anys");
		return false;
	} else if (!isValidAgePlayer(date.value, 16) && txtCat === "BEG") {
		alert("La edat mínima per participar a la categoria principiant són 16 anys");
		return false;
	}
	return true;

}
