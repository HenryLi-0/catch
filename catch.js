var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var timeAvoided = 0;
var keyPressed = {};
var countUp = setInterval(function () {
    timeAvoided += 1;
}, 1000);
canvas.width = 512;
canvas.height = 480;
const DIAG_RATE = 0.7071;
document.body.appendChild(canvas);
var heroImg = false;
var monsterImg = false;
var bgImg = false;
var heroImg = new Image(32, 32);
heroImg.src = "http://www.lostdecadegames.com/demos/simple_canvas_game/images/hero.png";
var monsterImg = new Image(50, 50);
monsterImg.src = "http://www.lostdecadegames.com/demos/simple_canvas_game/images/monster.png";
var bgImg = new Image(canvas.height, canvas.width);
bgImg.src = "http://www.lostdecadegames.com/demos/simple_canvas_game/images/background.png";
var hero = {
    x: 0,
    y: 0,
    xv: 0,
    yv: 0,
    speed: 7
}
class Monster  {
    constructor(x = 0, y = 0, speed = 3, xv = 0, yv = 0) {
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.startPositionX = x;
    this.startPositionY = y;
    this.speed = speed;
}
}
    var Monsters = []
    var monster1 = new Monster()
    Monsters.unshift(monster1);
    var monster2 = new Monster(canvas.width,0,)
    Monsters.unshift(monster2)
    var monster4 = new Monster(canvas.width,canvas.height)
    Monsters.unshift(monster4)
    var monster3 = new Monster(0,canvas.height)
    Monsters.unshift(monster3)
   function cycleMonstersPositions(monster) {
    for (var i = 0; i < Monsters.length; i++) {
    if (Monsters[i] !== monster) {
    var checkMonster = Monsters[i];
    if (
            checkMonster.x <= (monster.x + 32) &&
            monster.x <= (checkMonster.x + 32) &&
            checkMonster.y <= (monster.y + 32) &&
            monster.y <= (checkMonster.y + 32)
        )
 {
    if (monster.x >= checkMonster.x) {
    checkMonster.x -= 10;
      }
    else if (monster.x <= checkMonster.x) {
    checkMonster.x += 11;
    }
    }
    }
        }
      }
window.addEventListener("keydown", function () {
    keyPressed[event.key] = true;
})
window.addEventListener("keyup", function () {
    delete keyPressed[event.key]
})

function reset() {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;
    hero.xv = 0;
    hero.yv = 0;
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; monster.x = monster.startPositionX; monster.xv = 0;
        var monster = Monsters[i]; monster.y = monster.startPositionY; monster.yv = 0;
    }
    timeAvoided = 0;
}

function update(modifier) {
    if ("ArrowUp" in keyPressed && "ArrowRight" in keyPressed) {
        hero.yv -= hero.speed * modifier * DIAG_RATE;
        hero.xv += hero.speed * modifier * DIAG_RATE;
    } else if ("ArrowUp" in keyPressed && "ArrowLeft" in keyPressed) {
        hero.yv -= hero.speed * modifier * DIAG_RATE;
        hero.xv -= hero.speed * modifier * DIAG_RATE;
    } else if ("ArrowDown" in keyPressed && "ArrowRight" in keyPressed) {
        hero.yv += hero.speed * modifier * DIAG_RATE;
        hero.xv += hero.speed * modifier * DIAG_RATE;
    } else if ("ArrowDown" in keyPressed && "ArrowLeft" in keyPressed) {
        hero.yv += hero.speed * modifier * DIAG_RATE;
        hero.xv -= hero.speed * modifier * DIAG_RATE;
    } else if ("ArrowUp" in keyPressed) {
        hero.yv -= hero.speed * modifier;
    } else if ("ArrowDown" in keyPressed) {
        hero.yv += hero.speed * modifier;
    } else if ("ArrowRight" in keyPressed) {
        hero.xv += hero.speed * modifier;
    } else if ("ArrowLeft" in keyPressed) {
        hero.xv -= hero.speed * modifier;
    }

    hero.xv=hero.xv*0.99;
    hero.yv=hero.yv*0.99;
    hero.x+=hero.xv;
    hero.y+=hero.yv;

    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.y <= 0) {
        monster.y = 0;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.y >= canvas.height - 32) {
        monster.y = canvas.height - 32;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.x <= 0) {
        monster.x = 0;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.x >= canvas.width - 32) {
        monster.x = canvas.width - 32;
    }}
    if (hero.y <= 0) {
        hero.y = 0;
    }
    if (hero.y >= canvas.height - 32) {
        hero.y = canvas.height - 32;
    }
    if (hero.x <= 0) {
        hero.x = 0;
    }
    if (hero.x >= canvas.width - 32) {
        hero.x = canvas.width - 32;
    }
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.y > hero.y) {
        monster.yv -= monster.speed * modifier;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.y < hero.y) {
        monster.yv += monster.speed * modifier;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.x > hero.x) {
        monster.xv -= monster.speed * modifier;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; if (monster.x < hero.x) {
        monster.xv += monster.speed * modifier;
    }}
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i];
        monster.xv = monster.xv * 0.99;
        monster.yv = monster.yv * 0.99;
        monster.x += monster.xv;
        monster.y += monster.yv;
    }


    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i];
    if (
        hero.x <= (monster.x + 32) &&
        monster.x <= (hero.x + 32) &&
        hero.y <= (monster.y + 32) &&
        monster.y <= (hero.y + 32)
    )
    {
        reset();
    }
    }
    for (var i = 0; i < Monsters.length; i++) {
        cycleMonstersPositions(Monsters[i]);
    }
}

function render() {
    if (bgImg) {
        ctx.drawImage(bgImg, 0, 0);
    }
    if (heroImg) {
        ctx.drawImage(heroImg, hero.x, hero.y)
    }
    for (i = 0; i < Monsters.length; i++) {
        var monster = Monsters[i]; 
    if (monsterImg) {
        ctx.drawImage(monsterImg, monster.x, monster.y)
    }}
    ctx.fillStyle = "rgb(250, 250, 250)";
    ctx.font = "24px Helvetica";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Time avoided goblin: " + timeAvoided + " secs", 32, 32);
}
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var main = function () {
    var now = Date.now();
    var delta = now - then;

    update(delta / 1000);
    render();
    then = now;
    requestAnimationFrame(main);
};
var then = Date.now();
reset();
main();
