const display = document.getElementById("display");
var errorCheck = false;

function getKey(input){


    display.value += input;
}

function clearDisplay(){

    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}