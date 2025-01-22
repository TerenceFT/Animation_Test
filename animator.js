class Animator {
    constructor(spriteSheet, x0, y0, wFrame, hFrame, cntFrame, cntFrameRow, durFrame) {
        Object.assign(this, {spriteSheet, x0, y0, wFrame, hFrame, cntFrame, cntFrameRow, durFrame});

        this.elapsedTime = 0;
        this.totalTime = cntFrame * durFrame;
    }

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        const frame = this.curFrame();
        const row = Math.floor(frame / this.cntFrameRow);
        const col = frame % this.cntFrameRow;
        ctx.drawImage(this.spriteSheet, this.x0 + this.hFrame * col, this.y0 + this.wFrame * row, this.hFrame, this.wFrame, x, y, this.hFrame, this.wFrame);
    }

    curFrame() {
        return Math.floor(this.elapsedTime / this.durFrame) % this.cntFrame;
    }

    isDone() {
        return(this.elapsedTime >= this.totalTime);
    }
}