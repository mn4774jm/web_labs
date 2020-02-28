// tutorial can be accessed at https://www.briankoponen.com/html5-javascript-game-tutorial/

// draw canvas
let canvas = document.getElementById('game-layer');
let context = canvas.getContext('2d');

// game entities
// set-up player
function Player(x,y){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.direction = -1;
}
// uses prototype to be shared across all instances of the constructor function
Player.prototype.draw = function () {
    context.fillStyle = 'blue';
    context.fillRect(this.x, this.y, this.width, this.height);
};

// update is used to move the object when called during the frameupdate
Player.prototype.update = function () {
    this.y = this.y + this.direction;
    if(this.y <= 0 || this.y + this.height >= canvas.height) {
        this.direction *= -1
    }
};

// set up enemy object
function Enemy(x,y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.direction = 1;
}

Enemy.prototype.draw = function () {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
};

// update is used to move the object when called during the frameupdate
Enemy.prototype.update = function () {
    this.y = this.y+this.direction;
    if( this.y <= 0 || this.y+this.height >= canvas.height) {
        this.direction *= -1;
    }
};

let player = new Player(100, 175);
let enemy1 = new Enemy(20, 25);
let enemy2 = new Enemy(80, 25);
let enemy3 = new Enemy(160, 25);

// callback used to loop the program
function frameUpdate() {
    canvas = document.getElementById('game-layer');
    context = canvas.getContext('2d');

    context.fillStyle = 'gray';
    context.fillRect(0, 0, canvas.width, canvas.height);

    player.update();
    player.draw();

    enemy1.update();
    enemy1.draw();

    enemy2.update();
    enemy2.draw();

    enemy3.update();
    enemy3.draw();
    // used in place of setInterval/timeout. will execute code on next available screen repaint
    window.requestAnimationFrame(frameUpdate);
}

frameUpdate();
