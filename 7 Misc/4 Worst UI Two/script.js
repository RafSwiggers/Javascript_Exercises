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
    var target = document.getElementById('target');
    target.innerHTML = "+0";
    for(let x=0; x<4;x++){
        var newSpan = document.createElement('span');
        target.appendChild(newSpan);
    }
    var spans = document.getElementsByTagName('span');
    var button = document.getElementsByTagName('button');
    for(let i =0; i<button.length; i++){
        button[i].addEventListener('click', function(){
            if(button[i].innerHTML<button[i].getAttribute('data-max')){
            button[i].innerHTML++;
            spans[i+1].innerHTML = button[i].innerHTML++; 
            }
        })
    }

    // your code here

})();