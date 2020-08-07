class Paddle {
    constructor(x, y) {
        this.width = 10;
        this.height = 100;
        this.x = x;
        this.y = y - this.height / 2;
        this.score = 0;
    }

    show() {
        rect(this.x, this.y, this.width, this.height);
    }

    move(dir) {
        dir ? this.y -= 5 : this.y += 5;
    }

    collide(ball) {
        if (ball.y - ball.r >= this.y && ball.y + ball.r <= this.y + this.height) {
            if (ball.x - ball.r <= this.x && ball.x + ball.r > this.x + this.width) {
                ball.toggleX();
            }
        }
    }
}
