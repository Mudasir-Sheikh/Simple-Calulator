//calculator
function addvalue(num) {
    var inputField = document.getElementById("inputField");
    console.log("input",inputField)
    inputField.value += num
    
}

function result() {
    var inputField = document.getElementById("inputField")
    inputField.value = eval(inputField.value)
}


function allClearValue() {
    var inputField = document.getElementById("inputField")
    inputField.value = ""
}


function singleClearValue() {
    var inputField = document.getElementById("inputField")
    inputField.value = inputField.value.slice(0, -1)
}

function WhiteTheme() {
    let body = document.querySelector('body');
    let calculator = document.querySelector('.calculator');
    body.style.background =  "linear-gradient(90deg,white,#3a4452)";
    calculator.style.border = "1px solid white"; 
}
