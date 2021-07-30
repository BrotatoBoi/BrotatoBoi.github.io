var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

function mouse_move(evt) {
    console.log("X is: %i and Y is: %i", evt.clientX, evt.clientY);
}
