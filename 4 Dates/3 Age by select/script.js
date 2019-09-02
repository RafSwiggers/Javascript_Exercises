/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // your code here
    var date = new Date();
    var day = date.getDay()+1;
    var month = date.getMonth()+1;
    var year = date.getFullYear()-1;
    var button = document.getElementById('run');
    button.addEventListener('click', function(){
        var dobDay = document.getElementById('dob-day').value;
        var dobMonth = document.getElementById('dob-month').value;
        var dobYear = document.getElementById('dob-year').value;
        var userAge = year - dobYear;
        if (month > dobMonth && day > dobDay){
            userAge ++;
        }
        alert(userAge);
    })
})();