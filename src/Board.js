import React, {Component} from 'react';
import Square from "./Square";
import square from "./Square";

let counter = 0;


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

        // if (this.checkWin()) {
        //     alert("win");
        // }
    }
    disableButton = (index) => {
        const cell = document.getElementsByClassName("cell ");
        console.log(cell.length, index);
        cell[index].disabled = true;
    }


    // checkWin() { // לא עובד
    //     // Loop through each row on the board
    //     console.log("checkWin" + ", " + this.state.gameBoard.slice());
    //     const squares = this.state.gameBoard.slice();
    //     for (let row = 0; row < squares/6; row++) {
    //         // Loop through each column on the board
    //         for (let col = 0; col < squares/7; col++) {
    //             // Get the value at the current position on the board
    //             const value = squares[(row * 7) + col];
    //
    //             // Check if the current position is the start of a horizontal win
    //             if (col <= squares[row + 7] - 4 &&
    //                 value === squares[(row * 7) + col + 1] &&
    //                 value === squares[(row * 7) + col + 2] &&
    //                 value === squares[(row * 7) + col + 3]) {
    //                 return true
    //             }
    //
    //             // Check if the current position is the start of a vertical win
    //             if (row <= squares.length - 4 &&
    //                 value === squares[row + 1 + (col * 7)] &&
    //                 value === squares[row + 2 + (col * 7)] &&
    //                 value === squares[row + 3 + (col * 7)]) {
    //                 return true
    //             }
    //
    //             // Check if the current position is the start of a diagonal win (top-left to bottom-right)
    //             if (col <= squares[row + 7] - 4 && row <= squares.length - 4 &&
    //                 value === squares[((row * 7) + 1) * ((col * 7) + 1)] &&
    //                 value === squares[((row * 7) + 2) * ((col * 7) + 2)] &&
    //                 value === squares[((row * 7) + 3) * ((col * 7) + 3)]) {
    //                 return true
    //             }
    //
    //             // Check if the current position is the start of a diagonal win (bottom-left to top-right)
    //             if (col >= 3 && row <= squares.length - 4 &&
    //                 value === squares[((row * 7) + 1) * ((col * 7) - 1)] &&
    //                 value === squares[((row * 7) + 2) * ((col * 7) - 2)] &&
    //                 value === squares[((row * 7) + 3) * ((col * 7) - 3)]) {
    //                 return true
    //             }
    //         }
    //     }
    //
    //     // If no win was found, return false
    //     return false
    // }


    render() {
        return (
            <div>
                    {this.state.gameBoard.map((row, rowIndex) => (
                        <div className="game-board" key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <button className={"cell "} key={colIndex} value={col}
                                        aria-colcount={counter++}
                                        onClick={() =>  this.paintSquare(rowIndex, colIndex)}
                                />

                            ))}
                        </div>
                    ))}
            </div>
        );

    }


}

export default Board;