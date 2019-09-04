/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var target = document.getElementById('target');
    var newText = "This is my typewriter text. The delay is doable, the timing is hard to figure out.";
    var newString = ""
    var i=0;
   setInterval(function(){
    if(i<newText.length){
        newString+=newText[i];
        target.innerHTML=newString;
        i++;
        }
       }, Math.floor((Math.random() * 500) + 100))

})();