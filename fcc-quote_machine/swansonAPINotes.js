//$(document).ready(function) {
//Ron Swanson quote API https://github.com/jamesseanwright/ron-swanson-quotes

var quoteButton = document.body.querySelector('#getQuote');
var quoteOutput = document.body.querySelector('#quote_content');

function* quoteGenerator() {
	while (true) {
		yield fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
    		.then(res => res.json());
 	}
}

var generator = quoteGenerator();

function updateQuote() {
	quoteButton.disabled = true;

	generator.next().value.then(function (data) {
		quoteOutput.innerHTML = `"${data[0]}"`;
		quoteButton.disabled = false;
	});
}

quoteButton.onclick = updateQuote;

updateQuote();

// the goddam twitter button:
$('#tweet').on("click",function(){
  window.open("https://twitter.com/intent/tweet?text=" + quoteOutput + "- Ron Swanson");
});

 