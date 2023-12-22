import { Board } from './board.js';


//create and draw board
const checkersBoard = new Board(8, 8, 100);
checkersBoard.draw();
checkersBoard.initializePieces();