// Game Entities

//correct method uses modular design
// Player Object
//object are created but no longer move themselves
function Player(x, y) {
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 20;
    this.direction = -1;
}
// calls the game object for height
Player.prototype.update = function () {
    if( this.y <= 0 || this.y+this.height >= game.gameFieldHeight() ) {
        this.direction *= -1;
    }
};

// Enemy Object
function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.width = 10;
    this.height = 10;
    this.direction = 1;
}
Enemy.prototype.update = function () {
    if( this.y <= 0 || this.y+this.height >= game.gameFieldHeight() ) {
        this.direction *= -1;
    }
};

// Renderer Object
let renderer = (function () {

    // renderer gets the game entities from the game object and draws based on the type of entity
    function _drawEnemy(context, enemy) {
        context.fillStyle = "red";
        context.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }

    function _drawPlayer(context, player) {
        context.fillStyle = "blue";
        context.fillRect(player.x, player.y, player.width, player.height);
    }

    function _render() {
        let canvas = document.getElementById("game-layer");
        let context = canvas.getContext("2d");

        context.fillStyle = "gray";
        context.fillRect(0, 0, canvas.width, canvas.height);

        let i,
            entity,
            entities = game.entities();

        for (i=0; i < entities.length; i++) {
            entity = entities[i];

            if( entity instanceof Enemy ) {
                _drawEnemy(context, entity);
            }
            else if( entity instanceof Player ) {
                _drawPlayer(context, entity);
            }
        }
    }

    return {
        render: _render
    };

})();

// Physics Object
// gets game entities from game object and applies motion
let physics = (function () {

    function _update() {
        let i,
            entities = game.entities();

        for( i=0; i<entities.length; i++) {
            entities[i].y += entities[i].direction;
        }
    }

    return {
        update: _update
    };

})();

// game object effectively works like main
// Game Object
let game = (function () {
    let _gameFieldHeight = 200;
    let _entities = [];

    function _start() {
        _entities.push(new Player(100, 175));
        _entities.push(new Enemy(20, 25));
        _entities.push(new Enemy(80, 25));
        _entities.push(new Enemy(160, 25));

        window.requestAnimationFrame(this.update.bind(this));
    }

    function _update() {
        physics.update();

        let i;
        for( i=0; i<_entities.length; i++) {
            _entities[i].update();
        }

        renderer.render();

        window.requestAnimationFrame(this.update.bind(this));
    }

    return {
        start: _start,
        update: _update,
        entities: function () { return _entities; },
        gameFieldHeight: function () { return _gameFieldHeight; }
    };

})();

game.start();