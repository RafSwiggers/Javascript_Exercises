/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var passOne = document.getElementById('pass-one');
const validity = document.getElementById('validity');
passOne.addEventListener('input', function(){
    var numbers = 0
    var inputValue = passOne.value;
    if(inputValue.length>= 8){
             for(var i=0; i<inputValue.length; i++){
            if(!isNaN(inputValue[i])){
                numbers++;
            }
            if(numbers>=2){
                validity.innerHTML = "ok";
            } else {
                validity.innerHTML = " Not ok";
            }
             } 
    } else {
        validity.innerHTML = " Not ok";
    }
})
    // your code here

})();