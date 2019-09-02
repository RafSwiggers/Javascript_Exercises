/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
var redButton = document.getElementById('red');
var greenButton = document.getElementById('green');
var yellowButton = document.getElementById('yellow');
var blueButton = document.getElementById('blue');
redButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
});
greenButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "green";
});
yellowButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "yellow";
});
blueButton.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
})
})();