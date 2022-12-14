function checkWin (props){
    console.log("checkWin" + ", " + props);
    const squares = props.slice();
    for (let row = 0; row < squares/6; row++) {
        // Loop through each column on the board
        for (let col = 0; col < squares/7; col++) {
        // Check if there is a winner
        const player = squares[row][col];
        if (player === 0) {
            continue;
        }
        if (squares[row][col] === squares[row][col + 1] && squares[row][col] === squares[row][col + 2] && squares[row][col] === squares[row][col + 3]) {
            return true;
        }
        if (squares[row][col] === squares[row + 1][col] && squares[row][col] === squares[row + 2][col] && squares[row][col] === squares[row + 3][col]) {
            return true;
        }
        if (squares[row][col] === squares[row + 1][col + 1] && squares[row][col] === squares[row + 2][col + 2] && squares[row][col] === squares[row + 3][col + 3]) {
            return true;
        }
        if (squares[row][col] === squares[row - 1][col + 1] && squares[row][col] === squares[row - 2][col + 2] && squares[row][col] === squares[row - 3][col + 3]) {
            return true;
        }
        }
    }
    return false;
}