
function mouse_move(evt) {
    console.log("X is: %i and Y is: %i", evt.clientX, evt.clientY);
}

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

class Grid {
    constructor() {
        this.show = true;
    }

    draw() {
        if (this.show) {
            ctx.strokeStyle = 'lime';

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
}

class Snake {
    constructor() {
        this.step = 25;
        this.dir = 'idle';
        this.pos = [{x: canvas.clientWidth/2, y: canvas.clientHeight/2},
                    {x: canvas.clientWidth/2, y: canvas.clientHeight/2-this.step},
                    {x: canvas.clientWidth/2, y: canvas.clientHeight/2-this.step*2}]
    }

    update() {
        console.log(this.pos);

        if(this.dir != 'idle') {
            var dx = 0;
            var dy = 0;

            if(this.dir == 'up' && this.y > 0) {
                dy = -this.step;
            } else if(this.dir == 'down' && this.y < canvas.clientHeight - this.step) {
                dy = this.step;
            } else if(this.dir == 'left' && this.x > 0) {
                dx = -this.step;
            } else if(this.dir == 'right' && this.x < canvas.clientWidth - this.step) {
                dx = this.step;
            }
            var head = {x: this.pos[0].x+dx, y: this.pos[0].y+dy};
            console.log(head);
            this.pos.unshift(head);

            this.pos.pop();
        }
    }

    draw() {
        ctx.strokeStyle = 'darkRed';
        ctx.fillStyle = 'red';
        
        for(let p=0; p<this.pos.length; p++) {
            ctx.fillRect(this.pos[p].x, this.pos[p].y, this.step, this.step);
        }
    }
}

class Game {
    init() {
        this.grid = new Grid();
        this.snake = new Snake();
        this.fps = 5;
    }

    render() {
        this.grid.draw();
        this.snake.draw();
    }

    update() {
        setTimeout(function() {
            this.game.snake.update();

            requestAnimationFrame(game.execute.bind(game));
        }, 1000/this.fps);
    }

    execute() {
        this.render();
        requestAnimationFrame(this.update.bind(this));
    }
}

var game = new Game();
game.init()

requestAnimationFrame(game.execute.bind(game));

function toggle_grid() {
    var btn = document.getElementById('tgBtn');

    if(game.grid.show) {
        game.grid.show = false;
        btn.innerHTML = 'Turn Grid On';
    } else {
        game.grid.show = true;
        btn.innerHTML = 'Turn Grid Off';
    }
}

function move(dir) {
    game.snake.dir = dir;
}
