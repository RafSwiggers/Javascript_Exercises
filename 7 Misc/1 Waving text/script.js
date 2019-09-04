    
/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var newLine = " Oh god, I'm going to barf.";
    var target = document.getElementById("target");
    for(var i=0; i<newLine.length; i++){
        var newSpan = document.createElement('span');
        newSpan.style.fontSize = ""+Math.floor((Math.random() * 25) + 20)+"px";
        target.appendChild(newSpan);
        newSpan.innerHTML=newLine[i];
        

    }

})();