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
        } else {
            cell[(row * 7) + col].style.backgroundColor = "blue";
        }

        // squares[row][col].style.backgroundColor = "red";
    }


    render() {
        return (
            counter = 0,
                <div>
                    {this.state.gameBoard.map((row, rowIndex) => (
                        <div className="game-board" key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <button className={"cell "} key={colIndex} value={col}
                                        aria-colcount={counter++} // למצוא קומבינה למספר את התאים
                                        onClick={() => this.paintSquare(rowIndex, colIndex)}/>

                            ))}

                        </div>
                    ))}
                </div>
        );

    }


}

export default Board;