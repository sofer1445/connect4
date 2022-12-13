import React , {Component} from 'react';
import Square from "./Square";
import square from "./Square";



class Board extends Component {
    state = {
        gameBoard: [
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0]
        ],
        currentPlayer: 1,
        able: false,

};
    setState(state, callback) {
        super.setState(state, callback);
    }

    paintSquare = (row , col) =>{
        const cell = document.getElementsByClassName("cell");
        let squares = this.state.gameBoard.slice();
        squares[row][col] = this.state.currentPlayer;
        this.setState({squares, currentPlayer: this.state.currentPlayer === 1 ? 2 : 1});
        if (this.state.currentPlayer === 1){
            cell.style.backgroundColor = "red";
        }
        else {
            cell[row][col].style.backgroundColor = "blue";
        }

        // squares[row][col].style.backgroundColor = "red";
    }


    render() {
        return (
            <div>
                {this.state.gameBoard.map((row, rowIndex) => (
                    <div className="game-board" key={rowIndex}>
                        {row.map((col, colIndex) => (
                            <button className="cell" key={colIndex} value={col}  onClick={()=> this.paintSquare(rowIndex, colIndex)}/>

                        ))}

                    </div>
                ))}
            </div>
        );

    }

    // handleSquareClick = (row, col) => {
    //     let button = document.getElementsByClassName("cell")[row][col];
    //     const gameBoard = this.state.gameBoard.slice();
    //     gameBoard[row][col] = this.state.currentPlayer;
    //     this.setState({gameBoard, currentPlayer: this.state.currentPlayer === 1 ? 2 : 1});
    //     if (this.state.gameBoard[row][col] === 1) {
    //         button.style.backgroundColor = "red";
    //     }
    //     else if (this.state.gameBoard[row][col] === 2) {
    //         button.style.backgroundColor = "green";
    //     }
    //     else {
    //         button.style.backgroundColor = "white";
    //     }
    //
    //
    // }
    // render() {
    //     return (
    //         <div>
    //             {this.state.gameBoard.map((row, rowIndex) => (
    //                 <div className="game-board" key={rowIndex}>
    //                     {row.map((col, colIndex) => (
    //                         <button className="cell" key={colIndex} value={col} onClick={() => this.handleSquareClick(rowIndex, colIndex)} />
    //
    //                     ))}
    //
    //                 </div>
    //             ))}
    //         </div>
    //     );
    //
    // }

}
export default Board;