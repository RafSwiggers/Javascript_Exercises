/* becode/javascript
 *
 * /06-dom/07-generate-table-one/script.js - 6.7: génération d'un tableau (1)
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
    var column = document.createElement('td');
    table.appendChild(column);
    for (var i = 0; i<10; i++){
        var row = document.createElement('tr');
        column.appendChild(row);
    }


    // your code here

})();