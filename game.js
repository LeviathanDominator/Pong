let ball;
let paddleLeft, paddleRight;
let lines = [];

function setup() {
    createCanvas(800, 600);
    let numLines = 12;
    let lineWidth = 6;
    for (let i = 0; i < numLines; i++) {
        lines[i] = new Line(width / 2 - lineWidth / 2, height / numLines * i, lineWidth, numLines * 2);
    }
    ball = new Ball(width / 2, height / 2, 15);
    paddleLeft = new Paddle(20, height / 2);
    paddleRight = new Paddle(width - 20, height / 2);
}

function draw() {
    background(0);
    show();
    ball.move();
    if ((ball.y <= 0 && ball.y > -100) || ball.y > height - ball.r) {
        ball.toggleY();
    }
    if (keyIsDown(UP_ARROW) && paddleRight.y >= 0) {
        paddleRight.move(true);
    } else if (keyIsDown(DOWN_ARROW) && paddleRight.y <= height - paddleRight.height) {
        paddleRight.move(false);
    }
    if (keyIsDown(87) && paddleLeft.y >= 0) {
        paddleLeft.move(true);
    } else if (keyIsDown(83) && paddleLeft.y <= height - paddleLeft.height) {
        paddleLeft.move(false);
    }
    paddleLeft.collide(ball);
    paddleRight.collide(ball);
    scoreLogic();
}

function scoreLogic() {
    if (ball.x + ball.r <= 0) {
        paddleRight.score ++;
    } else if(ball.x - ball.r >= width) {
        paddleLeft.score ++;
    }
    if (ball.x + ball.r <= 0 || ball.x - ball.r >= width) {
        ball.restartBall(width / 2, height / 2);
    }
    drawScore();
}

function drawScore() {
    textSize(75);
    text(paddleLeft.score, width / 3, 75);
    text(paddleRight.score, width - width / 3 - 40, 75);
    textSize(15);
    text("Por Ismael Reyes Caballero", 10, height - 15);
    fill(255, 255, 255);
}

function show() {
    for (let line of lines) {
        line.show();
    }
    paddleLeft.show();
    paddleRight.show();
    ball.show();
}
