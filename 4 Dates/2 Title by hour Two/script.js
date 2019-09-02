/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var target = document.getElementById('target');
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes();
    if (hours>17 && mins>30){
        target.innerHTML="Good Evening.";
    } else {
        target.innerHTML="Hello!"
    };
    
    
    // your code here

})();