/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
var target = document.getElementById('target');
var table = document.createElement('table');
target.appendChild(table);
for(var i = 0; i < 10; i++){
    var row = document.createElement('tr');
    table.appendChild(row);
    for(var x=0; x<10; x++){
        var column = document.createElement('td');
        row.appendChild(column);
        column.innerHTML = (x+1)+"x"+(i+1)+"="+((x+1)*(i+1));
    }
}
    // your code here

})();