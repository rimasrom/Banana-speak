var inputText = document.querySelector('#input')
var btnTranslate = document.querySelector("#btn-translate")
var textOutput = document.querySelector("#output")

const url = "https://api.funtranslations.com/translate/minion.json"

function completeUrl(text){
    return url + "?" + "text=" + text;
}

function err(){
    alert("something went wrong ! Try again after some time...")
}

function clickEventHandler(){
    var input = inputText.value;
    fetch(completeUrl(input))
    .then(res => res.json())
    .then(output =>{
        textOutput.innerText = output.contents.translation
    })
    .catch(err =>{
        console.log(err)
    })
        
    
}

btnTranslate.addEventListener("click", clickEventHandler)

