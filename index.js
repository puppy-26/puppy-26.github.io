let ship = {
    top: 90,
    left: 50
};

let bullets = [];
let enemyBul = [];
let ptime = 0;
let alien1 = [
    {top: 24, left: 20},
    {top: 24, left: 25},
    {top: 24, left: 30},
    {top: 24, left: 35},
    {top: 24, left: 40},
    {top: 24, left: 45},
    {top: 24, left: 50},
    {top: 24, left: 55},
    {top: 24, left: 60},
    {top: 24, left: 65},
    {top: 24, left: 70},
    {top: 24, left: 75},
    {top: 32, left: 20},
    {top: 32, left: 25},
    {top: 32, left: 30},
    {top: 32, left: 35},
    {top: 32, left: 40},
    {top: 32, left: 45},
    {top: 32, left: 50},
    {top: 32, left: 55},
    {top: 32, left: 60},
    {top: 32, left: 65},
    {top: 32, left: 70},
    {top: 32, left: 75},
    {top: 40, left: 20},
    {top: 40, left: 25},
    {top: 40, left: 30},
    {top: 40, left: 35},
    {top: 40, left: 40},
    {top: 40, left: 45},
    {top: 40, left: 50},
    {top: 40, left: 55},
    {top: 40, left: 60},
    {top: 40, left: 65},
    {top: 40, left: 70},
    {top: 40, left: 75}
];
let alien2 = [
    {top: 8, left: 20, live: 2},
    {top: 8, left: 25, live: 2},
    {top: 8, left: 30, live: 2},
    {top: 8, left: 35, live: 2},
    {top: 8, left: 40, live: 2},
    {top: 8, left: 45, live: 2},
    {top: 8, left: 50, live: 2},
    {top: 8, left: 55, live: 2},
    {top: 8, left: 60, live: 2},
    {top: 8, left: 65, live: 2},
    {top: 8, left: 70, live: 2},
    {top: 8, left: 75, live: 2},
    {top: 16, left: 20, live: 2},
    {top: 16, left: 25, live: 2},
    {top: 16, left: 30, live: 2},
    {top: 16, left: 35, live: 2},
    {top: 16, left: 40, live: 2},
    {top: 16, left: 45, live: 2},
    {top: 16, left: 50, live: 2},
    {top: 16, left: 55, live: 2},
    {top: 16, left: 60, live: 2},
    {top: 16, left: 65, live: 2},
    {top: 16, left: 70, live: 2},
    {top: 16, left: 75, live: 2}
];

function startButton() {
    document.getElementById("start").innerHTML = 
    `<div id="inGame">
        <div id="playing">
            <div id="ships"></div>
            <div id="alien"></div>
            <div class="alien2"></div>
            <div id="bullets"></div>
            <div id="enemybulls"></div>
        </div>
        <div id="stats">
            <p id="blue"></p>
            <p id="red"></p>
            <p id="ptime"></p>
        </div>
    </div>`;
    
    gameLoop();
    updateTime();
}

function addBullet() {
    if (bullets.length <= 5) {
        bullets.push({top: ship.top, left: ship.left + 1.5});
    }
}

function drawGame() {
    document.getElementById("bullets").innerHTML = '';
    for (let i = 0; i < bullets.length; i++) {
        document.getElementById("bullets").innerHTML += `<div id="bullet" style="top: ${bullets[i].top}vh; left: ${bullets[i].left}%;"></div>`;
    }

    document.getElementById("alien").innerHTML = '';
    for (let i = 0; i < alien1.length; i++) {
        document.getElementById("alien").innerHTML += `<div id="alien1" style="top: ${alien1[i].top}vh; left: ${alien1[i].left}%;"></div>`;
    }
    for (let i = 0; i < alien2.length; i++) {
        document.getElementById("alien").innerHTML += `<div id="alien2" style="top: ${alien2[i].top}vh; left: ${alien2[i].left}%;"></div>`;
    }

    document.getElementById("ships").innerHTML = '';
    document.getElementById("ships").innerHTML = `<div id="ship" style="top: ${ship.top}vh; left: ${ship.left}%;"></div>`;

    document.getElementById("enemybulls").innerHTML = '';
    for (let i = 0; i < enemyBul.length; i++) {
        document.getElementById("enemybulls").innerHTML += `<div id="enemybull" style="top: ${enemyBul[i].top}vh; left: ${enemyBul[i].left}%;"></div>`;
    }

    document.getElementById("blue").innerHTML = `Blue Enemies Left: ${alien2.length}`;
    document.getElementById("red").innerHTML = `Red Enemies Left: ${alien1.length}`;
    document.getElementById("ptime").innerHTML = `Play Time: ${ptime}`;
}

function moveBullet() {
    for (let i = 0; i < bullets.length; i++) {
        bullets[i].top -= 1.3;
    }

    for (let i = 0; i < enemyBul.length; i++) {
        enemyBul[i].top += 1.3;
    }
}

function check() {
    for (let i = 0; i < bullets.length; i++) {
        if (bullets[i].top < 0) {
            bullets.splice(i, 1);
        }
    }

    for (let i = 0; i < enemyBul.length; i++) {
        if (enemyBul[i].top > 95) {
            enemyBul.splice(i, 1);
        }
    }

    for (let i = 0; i < alien1.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (bullets[j].top >= alien1[i].top && bullets[j].top <= alien1[i].top + 5 && bullets[j].left >= alien1[i].left - 1 && bullets[j].left <= alien1[i].left + 4) {
                alien1.splice(i, 1);
                bullets.splice(j, 1);
            }
        }
    }

    for (let i = 0; i < alien2.length; i++) {
        for (let j = 0; j < bullets.length; j++) {
            if (bullets[j].top >= alien2[i].top && bullets[j].top <= alien2[i].top + 5 && bullets[j].left >= alien2[i].left - 1 && bullets[j].left <= alien2[i].left + 4) {
                alien2[i].live--;
                bullets.splice(j, 1);

                if (alien2[i].live == 0) {
                    alien2.splice(i, 1);
                }
            }
        }
    }

    for (let i = 0; i < enemyBul.length; i++) {
        if (enemyBul[i].top + 1.2 >= ship.top && enemyBul[i].top <= ship.top + 5 && enemyBul[i].left + 0.7 >= ship.left && enemyBul[i].left <= ship.left + 5) {
            window.location.href = "resultlose.html";
        }
    }

    if (alien1.length == 0 && alien2.length == 0) {
        window.location.href = "blablabla.html";
    }
}

function addEnemyBull() {
    setTimeout(addEnemyBull, 2000);
    let a = Math.floor(Math.random() * alien2.length);
    let b = Math.floor(Math.random() * alien2.length);
    let c = Math.floor(Math.random() * alien2.length);
    let d = Math.floor(Math.random() * alien2.length);

    enemyBul.push({top: alien2[a].top + 6, left: alien2[a].left + 1.7}, {top: alien2[b].top + 6, left: alien2[b].left + 1.7}, {top: alien2[c].top + 6, left: alien2[c].left + 1.7}, {top: alien2[d].top + 6, left: alien2[d].left + 1.7});
}

function updateTime() {
    setTimeout(updateTime, 1000);
    ptime++;
}

let count = 25;
let mright = false;
function moveAlien() {
    if (mright == false) {
        for (let i = 0; i < alien1.length; i++) {
            alien1[i].left -= 0.3;
        }
    
        for (let i = 0; i < alien2.length; i++) {
            alien2[i].left -= 0.3;
        }

        count--;
    } else {
        for (let i = 0; i < alien1.length; i++) {
            alien1[i].left += 0.3;
        }
    
        for (let i = 0; i < alien2.length; i++) {
            alien2[i].left += 0.3;
        }

        count++;
    }

    if (count == 0) {
        mright = true;
    } else if (count == 50) {
        mright = false;
    }
}

function gameLoop() {
    setTimeout(gameLoop, 50);
    drawGame();
    moveBullet();
    check();
    moveAlien();
}
setTimeout(addEnemyBull,4000);

document.onkeydown = (prop) => {
    if (prop.keyCode == 37) {
        ship.left -= 1;
    } else if (prop.keyCode == 39) {
        ship.left += 1;
    } else if (prop.keyCode == 32) {
        addBullet();
    }
}