import React, {Component} from 'react';
import checkWin from "./CheckWin";
import Square from "./Square";
import square from "./Square";
import app from "./App";

let counter = 0;
let indexBoard = 35;
let lengthRow = 5;


class Board extends Component {
    state = {
        gameBoard: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ],
        currentPlayer: 1,
        able: false,

    };

    setState(state, callback) {
        super.setState(state, callback);
    }

    paintSquare = (row, col) => {
        console.log("row: " + row + " col: " + col);
        const cell = document.getElementsByClassName("cell ");
        console.log(cell.length,);
        let squares = this.state.gameBoard.slice();
        squares[row][col] = this.state.currentPlayer;
        this.setState({squares, currentPlayer: this.state.currentPlayer === 1 ? 2 : 1});

        if (this.state.currentPlayer === 1) {
            cell[(row * 7) + col].style.backgroundColor = "red";
            this.disableButton((row * 7) + col);

        }
        if (this.state.currentPlayer === 2) {
            cell[(row * 7) + col].style.backgroundColor = "blue";
            this.disableButton((row * 7) + col);

        }
        console.log("status: " + this.state.gameBoard);
        let winner = {
            row: row,
            col: col,
            gameBoard: this.state.gameBoard
        }

        if (checkWin(winner)) {
            alert("Player " + this.state.currentPlayer + " won!");
            setTimeout(this.reloadPage, 1500);

        }
    }
    disableButton = (index) => {
        const cell = document.getElementsByClassName("cell ");
        console.log(cell.length, index);
        cell[index].disabled = true;

    }
    checkPosition = (row, col) => {
        const cell = document.getElementsByClassName("cell ");
        console.log(cell.length, (row * 7) + col);
        // let rowCheck = Math.floor((col + indexBoard)/lengthRow);
        // if (rowCheck >= 0) {
        if (cell[(lengthRow * 7) + col].style.backgroundColor === "blue" || cell[(lengthRow * 7) + col].style.backgroundColor === "red") {
            lengthRow--;
            this.checkPosition(lengthRow, col);
        } else {
            this.paintSquare(lengthRow, (col));
            lengthRow = 5;
        }
    }


    render() {
        return (
            counter = 0,
                <div>
                    <h1>Connect 4</h1>
                    {this.state.gameBoard.map((row, rowIndex) => (
                        <div className="game-board" key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <button className={"cell "} key={colIndex} value={col}
                                        aria-colcount={counter++}
                                        onClick={() => this.checkPosition(rowIndex, colIndex)}
                                />

                            ))}

                        </div>


                    ))}
                    {/*<img src="con4.jpg" alt="game board pic"> לא מצליח לשים תמונה*/}
                    {/*</img>*/}
                </div>
        );

    }


    reloadPage() {
        window.location.reload();
    }
}

export default Board;