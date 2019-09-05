/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var button = document.getElementById('increment');
    var target = document.getElementById('target');
    var counter = window.localStorage;
    if(!counter){
    counter.setItem('counter', 0)
    };
    target.innerHTML = counter.counter;
    button.addEventListener('click', function(){
        counter.counter++;
        target.innerHTML = counter.counter;
    })

    


})();