/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var months = ["jan", "feb", "mar", "apr", "mei", "jn", "jl", "au", "sep", "oct", "nov", "dec"];
var answer = [];
var yearField = document.getElementById('year');
var button = document.getElementById('run');
button.addEventListener('click', function(){
    for(var i=0; i<11; i++){
        for(var k =0; k<29; k++){
            if(k == 13){
                var date = new Date(yearField, i, k);
                if (date.getDay() == 4){
                    answer.push(months[i]);
                }
            } 
        }
    }
    console.log(answer);
})
    // your code here

})();