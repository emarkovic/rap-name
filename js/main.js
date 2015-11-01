
var firstName = [
	"Lil", 
	"Dr.", 
	"Missy",
	"Miss",
	"Baby",
	"Big",
	"Sha",
	"Da",
	"Daddy",
	"DJ",
	"Gangsta",
	"Kool",
	"Rich",
	"Slim",
	"Soulja",
	"Young",
	"Will",
	"Boi",
	"Brat",
	"Honey",
	"Mac",
	"MC"
];

var lastName = [
	"Dogg", 
	"Mamma", 
	"Lamar",
	"West",
	"Boo",
	"Committee",
	"Rida",
	"Prince",
	"Cashe",
	"Dollar",
	"Pain",
	"Brothers",
	"Solo",
	"Ali",
	"Trouble",
	"Zombie",
	"Jonesz",
	"Fresh",
	"Money",
	"Project",
	"Man"
];

function chooseName() {
	var firstNum = Math.floor(Math.random() * firstName.length);
	var lastNum = Math.floor(Math.random() * lastName.length);

	var rapName = firstName[firstNum] + "&nbsp;&nbsp;" + lastName[lastNum];

	document.getElementById('rap-name').innerHTML = rapName;
}

chooseName();



$('#refresh').on('click', function (e) {
	console.log(e);
	e.preventDefault(); //prevent native action : wont go to 'a' tag href
	chooseName();
});





