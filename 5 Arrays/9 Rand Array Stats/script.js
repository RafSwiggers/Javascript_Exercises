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
    var myArray=[];
    for(var i=0; i<10; i++){
        myArray.push(Math.floor((Math.random() * 100) + 1));
    }
    for(var x=0; x<myArray.length; x++){
        document.getElementsByTagName('td')[x].innerHTML=myArray[x];
    }
    var min=myArray[0];
    for(var a=0; a<myArray.length; a++){
        if(myArray[a]<min){
            min = myArray[a];
        }
    }
    document.getElementById('min').innerHTML = min;

    var max=myArray[0];
    for(var b=0; b<myArray.length; b++){
        if(myArray[b]>max){
            max = myArray[b];
        }
    }
    document.getElementById('max').innerHTML = max;

    var sum = 0;
    for(var c=0; c<myArray.length; c++){
        sum+=myArray[c];
    }
    document.getElementById('sum').innerHTML=sum;
    document.getElementById('average').innerHTML=sum/myArray.length;
})
    // your code here

})();