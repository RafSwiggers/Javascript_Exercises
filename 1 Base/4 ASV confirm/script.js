/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
var age = prompt("How old are you?");
var gender = prompt("What gender do you identify as?");
var town = prompt("What town do you live in?");
if (confirm("You are "+age+" years old, you identify as "+gender+" and you're from "+town+"?")){
    alert("congratulations!");
} else {
    arguments.callee();
}
})();