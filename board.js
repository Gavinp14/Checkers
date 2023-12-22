import { Piece } from './piece.js'

export class Square{
    constructor(row, col, color){
        this.row = row;
        this.col = col;
        this.color = color;
    }

    draw(ctx, size){
        ctx.fillStyle = this.color;
        ctx.fillRect(this.col * size, this.row * size, size, size);
    }
}

export class Board{
    constructor(rows, cols, size){
        this.rows = rows;
        this.cols = cols;
        this.size = size;
        this.boardArea = document.getElementById("boardSpace");
        this.ctx = this.boardArea.getContext('2d');
        this.board = this.createBoard();
    }

    createBoard(){
        const board = [];
        
        for (let row=0; row < this.rows; row++){
            const currRow = [];
            for (let col=0; col < this.cols; col++){
                const color = (row + col) % 2 === 0 ? 'red' : 'black';
                currRow.push(new Square(row, col, color));
            }
            board.push(currRow);
        }

        return board;
    }

    initializePieces(){
        const darkPieces = [];
        const lightPieces = [];

        //draw white pieces
        for (let row=0; row < 3; row++){
            for (let col=0; col < this.cols; col++){
                if ((row + col) % 2 === 1){
                    const piece = new Piece(row, col, 'brown', 40);
                    darkPieces.push(piece);
                    piece.draw(this.ctx, this.size);
                }
            }
        }

        //draw black pieces
        for (let row=5; row < this.rows; row++){
            for (let col=0; col < this.cols; col++){
                if ((row + col) % 2 === 1){
                    const piece = new Piece(row, col, 'tan', 40);
                    lightPieces.push(piece);
                    piece.draw(this.ctx, this.size);
                }
            }
        }
        return piece;

    }

    draw() {
        for (let row = 0; row < this.rows; row++) {
            for (let col = 0; col < this.cols; col++) {
                this.board[row][col].draw(this.ctx, this.size);
            }
        }
    }
}



