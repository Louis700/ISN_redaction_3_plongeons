"use strict";

let noteInputs = [];

let calculateButton;
let finalNoteContainer;

let notes = [];

window.onload = init;


function init() {
	initElements();
}

function initElements() {
	declareElements();
	calculateButton.addEventListener("click", calculateFinalNote);
}

function declareElements() {
	for(let i = 0; i < 5; i++)
		noteInputs.push( document.getElementById("note" + (i + 1) + "Input") );
	calculateButton = document.getElementById("calculateButton");
	finalNoteContainer = document.getElementById("finalNoteContainer");
}

function calculateFinalNote() {
	let valuesAreRight = true;

	notes = new Array(5).fill().map( (x, i) => {

		// If the entered values are right
		if(noteInputs[i].value !== "" && Number(noteInputs[i].value) >= 0 && Number(noteInputs[i].value) <= 10 && Number(noteInputs[i].value)%0.5 === 0) 
			return Number(noteInputs[i].value) 
		else
			valuesAreRight = false;	
		return "";
					
	});

	if(!valuesAreRight) {
		alert("Toutes les notes ne sont pas entrées ou ne réspectent pas toutes les règles imposées !"
		      + "\n\n\tChaque note doit être de 0 à 10 au demi point près.");
		return;
	}

	notes.sort().shift();
	notes.pop();

	let finalNote = 0;
	notes.forEach((x) => finalNote += x); 

	finalNoteContainer.innerHTML = "";
	finalNoteContainer.insertAdjacentText("beforeend", finalNote);
}
