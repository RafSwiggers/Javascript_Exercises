/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var field = document.getElementsByTagName('input');
    var button = document.getElementById('run');
    var passOne = document.getElementById('pass-one');
    var passTwo = document.getElementById('pass-two');
    button.addEventListener('click',function(){
        if(passOne.value!==passTwo.value){
            field[0].classList.add('error');
            field[1].classList.add('error');

        }
    })
    // your code here

})();