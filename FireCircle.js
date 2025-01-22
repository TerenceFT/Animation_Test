class FireCircle {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./fire_circles_100x100_61f.png"), 0, 0, 100, 100, 61, 8, 0.02);
        this.x = 0;
        this.y = 0;
        this.dir = -1;
        this.speed = 180;
    }

    update() {
        this.x = (this.x + this.speed * this.game.clockTick) % 1024;
        if (this.y <= 1 || this.y >= 678)
            this.dir *= -1;
        this.y += this.dir * this.speed * this.game.clockTick / 1.2;
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x,this.y);
    }
}