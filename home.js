//How to create a random number between two integers
function showNumber(){ 
    var diceValue = randomInteger(1,10);
    document.getElementById("outputText").innerHTML = "Value is " + diceValue ;
    }

function randomInteger(a, b){
    return Math.floor(Math.random()*(b-a)+a);//(b-a) gives number of ramdom number
                                             //a gives the starting point.
}


