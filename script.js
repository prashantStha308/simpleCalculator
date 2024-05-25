console.log($);

const display = $("#display");
var errorCheck = false;
console.log(display);

function getKey(input){

    let currentValue = display.val();
    display.val(currentValue + input);
    // display.value += input;
}

function clearDisplay(){

    display.val("");
}

function calculate(){
    try{
        let result = eval(display.val());
        display.val(result);
    }
    catch(error){
        display.val("Error");
    }
}