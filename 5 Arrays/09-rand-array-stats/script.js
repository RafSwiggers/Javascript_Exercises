/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var button = document.getElementById('run');
    button.addEventListener('click', function(){
       var array = []; 
       for (var i=0; i<10; i++){
            array.push(Math.floor(Math.random() * Math.floor(100)))
       }
    }
        )

    })
    

})();
