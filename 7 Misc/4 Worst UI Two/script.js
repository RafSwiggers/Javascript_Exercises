/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById('target');
    target.innerHTML = "+0";
    for(var a =0; a<4; a++){
        var newSpan = document.createElement('span');
        target.appendChild(newSpan);
        newSpan.classList.add("result");
        
    }
    let targetSpans = document.getElementsByClassName('result');
    const inputField = document.getElementsByTagName('input');
    var button = document.getElementsByTagName('button');
    for(let i =0; i<button.length; i++){
        button[i].addEventListener('click', function(){
            inputField[i].value = Math.floor((Math.random() * 99) + 0)
            targetSpans[i].innerHTML = inputField[i].value;

    })
}




})();