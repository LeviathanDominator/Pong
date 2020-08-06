class Ball {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.velX = 3;
        this.velY = floor(random(3, 5));
        this.r = r;
    }

    show() {
        circle(this.x, this.y, this.r * 2);
    }

    move() {
                this.x += this.velX;
                this.y -= this.velY;
    }

    toggleX() {
        this.velX *= -1;
    }

    toggleY() {
        this.velY *= -1;
    }

    restartBall(x, y) {
        this.x = x;
        this.y = y;
        this.toggleX();
        this.velY = floor(random(3, 5));
    }
}
