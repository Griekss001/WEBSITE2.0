/*jslint devel: true */
// JavaScript Document
//aside toggle
var aside = document.querySelector('aside');
var asidebutton = document.querySelector('body > button');

var open = function () {
    'use strict';
	aside.classList.toggle('open');
};

/*------------------------------------------------------*/


asidebutton.addEventListener('click', open);

var gif = document.querySelector('[src="img/download.gif"]');
var download = document.querySelector('[src="img/download.svg"]');

var laden = function () {
    'use strict';
	gif.classList.toggle('laden');
};

/*------------------------------------------------------*/


download.addEventListener('click', laden);


/*------------------------------------------------------*/

console.log('opslaan');
var opslaan = document.querySelector('#opslaan');
var opslaan = document.getElementById('#opslaan');
var opslaan = document.getElementById('opslaan').getAttribute('src', '/image/like.svg');
var opslaan = document.querySelector('img');

function OpslaanZichtbaar() {
    'use strict';
    opslaan.classList.toggle('OpslaanZichtbaar');
}

opslaan.addEventListener('click', function (event) {
    'use strict';
    event.preventDefault();
//    Vergeet wat je 'default' zou doen en voert hide() uit
    [OpslaanZichtbaar]();
});

var opslaan = document.getElementById('opslaan');

opslaan.addEventListener('click', function (event) {
    'use strict';
	event.preventDefault();
	OpslaanZichtbaar();
});

/*------------------------------------------------------*/

/*----------------POPUP--------------------------------------*/






