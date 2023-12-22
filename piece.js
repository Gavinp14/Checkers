export class Piece{
    constructor(row, col, color, radius){
        this.row = row;
        this.col = col;
        this.color = color;
        this.radius = radius;
    }

    draw(ctx, size){
        const x = (this.col + 0.5) * size;
        const y = (this.row + 0.5) * size;
        ctx.fillStyle = this.color;

        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}