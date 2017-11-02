// JavaScript Document
//aside toggle
var aside = document.querySelector('aside');
var button = document.querySelector('body > button');

var open = function () {

	aside.classList.toggle('open')
}

button.addEventListener('click', open);

//hart micro interactie [src="img/download.svg"]
var gif = document.querySelector('[src="img/download.gif"]');
var download = document.querySelector('[src="img/download.svg"]');

var laden = function () {

	gif.classList.toggle('laden')
}

download.addEventListener('click', laden);