import React from 'react';
import Connect4Slot from "./Connect4Slot";
import Connect4Column from "./Connect4Column";


class Connect4 extends React.Component {
    constructor() {
        super();
        this.boardModel = []
        this.state = {
            turn: true,
            board: [],
            gameStarted: false
        }
    }

    matrixBoard = () => {
        let newBoardModel = []
        for (let x = 0; x < 7; x++) {
            let newColumn = []
            for (let y = 0; y < 6; y++) {
                newColumn.push(0)
            }
            newBoardModel.push(newColumn)
        }
        this.boardModel = newBoardModel;

    }
    squareItem = () => {
        this.matrixBoard();
        let newBoardRender = []
        for (let x = 0; x < this.boardModel.length; x++) {
            let newColumn = []
            for (let y = 0; y < this.boardModel[x].length; y++) {
                if (this.boardModel[x][y] === 1) {
                    newColumn.push(<Connect4Slot identifier={1} dropper={this.dropper}
                                                 coordinate={[x, y]}></Connect4Slot>)
                } else if (this.boardModel[x][y] === 2) {
                    newColumn.push(<Connect4Slot identifier={2} dropper={this.dropper}
                                                 coordinate={[x, y]}></Connect4Slot>)
                } else {
                    newColumn.push(<Connect4Slot identifier={0} dropper={this.dropper}
                                                 coordinate={[x, y]}></Connect4Slot>)
                }
            }
            newBoardRender.push(<Connect4Column column={newColumn}></Connect4Column>)
        }
        this.setState({
            board: newBoardRender,
            gameStarted: true
        })
    }

    dropper = (coordinates) => {
        let landingCoordinates = []
        for (let y = 0; y < this.boardModel[coordinates[0]].length; y++) {
            if (this.boardModel[coordinates[0]][y] === 0) {
                this.boardModel[coordinates[0]][y] = this.state.turn ? 1 : 2
                landingCoordinates.push(coordinates[0])
                landingCoordinates.push(y)
                break;
            }
        }
        this.setState(prev => {
            return {
                board: this.squareItem(),
                turn: !prev.turn
            }
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.matrixBoard}>Start Game</button>
                <div className="connect4-board">
                    {this.state.gameStarted ? this.state.board : null}
                </div>
            </div>
        )
    }
}
export default Connect4;