// Get the canvas and it's context.
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Function to get the mouse location.
function mouse_move(evt) {
    console.log("X is: %i and Y is: %i", evt.clientX, evt.clientY);
}

// The Grid Code. (Create variable for showing The Grid)
var showGrid = true;

// Toggle The Grid on or off.
function toggle_grid() {
    btn = document.getElementById('tgBtn');
    
    if(showGrid) {
        showGrid = false;
        btn.innerHTML = 'Turn Grid On';
    } else {
        showGrid = true;
        btn.innerHTML = 'Turn Grid Off';
    }
}

// Draw The Grid.
function draw_grid() {
    ctx.strokeStyle = 'lime';

    if(showGrid) {    
        for(let x=0; x<canvas.clientWidth; x+=25) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.clientHeight);
            ctx.stroke();
        }

        for(let y=0; y<canvas.clientHeight; y+=25) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.clientWidth, y);
            ctx.stroke();
        }
    } else {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }
}

var Snake = {
    x: canvas.clientWidth/2,
    y: canvas.clientHeight/2,
    step: 25,

    draw: function() {
        ctx.strokeStyle = 'darkred';
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, 25, 25);
    },
};

// Run the game.
function main() {
    draw_grid()
    Snake.draw()
    requestAnimationFrame(main);
}

requestAnimationFrame(main);
