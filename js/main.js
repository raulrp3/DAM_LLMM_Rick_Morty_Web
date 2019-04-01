let LENGTH = 6;
let indexCards = 0;
$(document).ready(function(){
	getCharacters();
});

function getCharacters(){
	createRow();
	$.ajax({
		url: "https://rickandmortyapi.com/api/character",
		success: function(data){
			let numberRow = LENGTH / 3;
			for (let i = 1;i <= numberRow;i++){
				let row = $("#row" + i);
				for (let j = 0;j < 3;j++){
					row.append(createCard(data.results[indexCards]));
					indexCards++;
				}
			}
		},
		error: function(){
			console.log("Se ha producido un error");
		}
	});
}

function createRow(){
	let cardsGroup = $("#cards_group");
	let numberRow = LENGTH / 3;
	for (let i = 1;i <= numberRow;i++){
		cardsGroup.append("<div class = 'row' id = 'row" + i + "'></div>");
	}
}

function createCard(character){
	return "<div class = 'col-sm'>" + 
		"<div class = 'card'>" + 
				"<img src = " + character.image + " class = 'card_image_top'>" +
				"<div class = 'card-body'>" + 
					"<h5 class = 'card-title'>" + character.name + "</h5>" +
					"<div class = 'card-text fact'>" + 
						"<p class = 'color_green'>ID: </p>" + 
						"<p class = 'color_white'>" + character.id + "</p>" +
					"</div>" + 
					"<ul class = 'list-group list-group-flush'>" + 
						"<li class = 'fact'>" +
							"<p class = 'color_green'>Status: </p>" + 
							"<p class = 'color_white'>" + character.status + "</p>" +
						"</li>" + 
						"<li class = 'fact'>" +
							"<p class = 'color_green'>Species: </p>" + 
							"<p class = 'color_white'>" + character.species + "</p>" +
						"</li>" + 
						"<li class = 'fact'>" +
							"<p class = 'color_green'>Type: </p>" + 
							"<p class = 'color_white'>" + character.type + "</p>" +
						"</li>" + 
						"<li class = 'fact'>" +
							"<p class = 'color_green'>Gender: </p>" + 
							"<p class = 'color_white'>" + character.gender + "</p>" +
						"</li>" + 
					"</ul>" + 
				"</div>" + 
		"</div>" + 
	"</div>"
}