/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
var opOne = Number(document.getElementById("op-one").value);
var opTwo = Number(document.getElementById("op-two").value);
var buttons = document.getElementsByClassName('operator');

var calculate = function(x, one, two){
    switch(x){
        case 0:
            console.log(one + two);
            break;
        case 1:
                console.log(one - two);
                break;
        case 2:
                console.log(one * two);
                break;
        case 3:
                console.log(one / two);
    }
}

for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click", calculate(i, opOne, opTwo));
}


function test() {
    return true;
}

(function() {
    return true;
})();