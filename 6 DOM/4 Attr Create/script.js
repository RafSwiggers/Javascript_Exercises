/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var target = document.getElementById('target');
var imageSRC = document.getElementById('source');
var newSRC = imageSRC.getAttribute("data-image");
var newIMG = document.createElement('img');
newIMG.src = newSRC;
target.appendChild(newIMG);

    // your code here

})();