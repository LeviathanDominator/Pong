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
    for (let line of lines) {
        line.show();
    }
    ball.show();
    ball.move();
    if ((ball.y <= 0 && ball.y > -100) || ball.y > height - ball.r) {
        ball.toggleY();
    }
    paddleLeft.show();
    paddleRight.show();
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
    if (ball.x <= 0) {
        paddleRight.score ++;
    } else if(ball.x >= width) {
        paddleLeft.score ++;
    }
    if (ball.x <= 0 || ball.x >= width) {
        ball.restartBall(width / 2, height / 2);
    }
    textSize(75);
    text(paddleLeft.score, width / 3, 75);
    textSize(75);
    text(paddleRight.score, width - width / 3, 75);
    fill(255, 255, 255);
}
