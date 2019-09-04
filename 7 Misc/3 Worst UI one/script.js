/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var target = document.getElementById('target');
    target.innerHTML= ""+0;
    var number = document.createElement('span');
    target.appendChild(number);
    var slider = document.getElementById('slider');
    slider.addEventListener('input', function(){
        number.innerHTML = slider.value;
    })

    // your code here

})();