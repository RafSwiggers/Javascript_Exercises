/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var answer = Math.floor((Math.random() * 100) + 1);
    var guesses = 0;
    console.log(answer);
    var guessAgain = function(){
    var guess = Number(prompt("Welcome to my number game! Guess what the number is!"));
    if(guess == answer){
        guesses++;
        alert("Congratulations, you win! You needed "+guesses+" guesses.");
    } else if (guess<answer){
        guesses++;
        alert("Nice try! Guess again, and try a higher number.")
        guessAgain();
    } else {
        guesses++;
        alert("Nice try! Guess again, and try a lower number.")
        guessAgain(); 
    }
}
guessAgain();

    

})();
