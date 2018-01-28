(function() {
	var app = angular.module('vikler', []);

	app.controller ('IndexController', function() {

		this.menu = menuItems;
		this.slider = sliderItems;
		this.whyUs = {};
		this.whyUs.title = whyUsTitle;
		this.whyUs.desc = whyUsDesc;
		this.whyUs.items = whyUsItems;

	});



// -- DATA (should be in json) --
var menuItems = [
{
	label: "Delatnost",
	page: "Delatnost"
},
{
	label: "Razvoj softvera",
	page: "Racunari"
},
{
	label: "Galerija",
	page: "Galerija"
},
{
	label: "Kontakt",
	page: "Kontakt"
}
];

var sliderItems = [
{
	text: "Premotavanje i remont",
	img: "background-image: url(images/slider1.jpg)",
	page: "Delatnost",
	section: "Premotavanje"
},
{
	text: "Servis ručnih alata",
	img: "background-image: url(images/slider2.jpg)",
	page: "Delatnost",
	section: "Alati"
},
{
	text: "Servis računara",
	img: "background-image: url(images/slider3.jpg)",
	page: "Racunari",
	section: "Servis"
},
{
	text: "Razvoj softvera",
	img: "background-image: url(images/slider4.jpg)",
	page: "Racunari",
	section: "Softver"
},
{
	text: "Video nadzor",
	img: "background-image: url(images/slider5.jpg)",
	page: "Delatnost",
	section: "Nadzor"
},
{
	text: "Ugradnja alarma",
	img: "background-image: url(images/slider6.jpg)",
	page: "Delatnost",
	section: "Alarmi"
}
];

var whyUsTitle = "Zašto da nas posetite";
var whyUsDesc = "Neki text ovde možda. Samostalna zanatska radnja.. Zašto bi neko trebalo da nas poseti. Nešto o servisu.";

var whyUsItems = [
{
	icon: "images/remont.png",
	title: "Premotavanje i remont",
	desc:  "Premotavanje i remont elektromotora, transformatora, generatora, pumpi za vodu i grejanje. Servis električnog ručnog alata, HILTI, BOSCH, SKIL, DREMEL, MAKITA.",
	page: "Delatnost",
	section: "Premotavanje"
},
{
	icon: "images/software.png",
	title: "Servis racunara i izrada softvera",
	desc:  "Servis računara, štampača i računarskih mreža. Instalacija operativnih sistema i ostalog softvera. Programi iz oblasti baza podataka, za servise i knjigovodstvo..",
	page: "Racunari",
	section: "Servis"
},
{
	icon: "images/camera.png",
	title: "Video nadzor i alarmi",
	desc:  "Ugradnja video nadzora u vašim stambenim ili poslovnim objektima. Ugradnja alarma u stambene ili poslovne prostore. !Ovde mi treba jos jedan red!",
	page: "Delatnost",
	section: "Nadzor"
}
]

})();