var textToTranslate = document.querySelector("#textToTranslate");
var btnTranslate = document.querySelector("#btnTranslate");
btnTranslate.addEventListener('click',translate);
var outputDiv = document.querySelector("#outputDiv");
//fun translations
var serverURL = "https://api.funtranslations.com/translate/minion.json";
//fun kanye quotes
//var serverURL = "https://api.kanye.rest/";
function errHandle(error){
	console.log(error);
}
function getTranslatedData(text){
	return serverURL+"?"+"text="+text;
}
function translate() {	
	fetch(getTranslatedData(textToTranslate.value))
	.then(response => response.json())
	.then(output => {
		console.log(output)
		//fun translation
		var outputTxt = output.contents.translated;
		console.log(outputTxt)
		outputDiv.innerHTML = outputTxt;

		//fun kanye quotes
		//outputDiv.innerHTML = output.quote;
		})
	.catch(errHandle);
	
}

