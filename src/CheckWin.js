function checkWin(props) {
    console.log("checkWin" + ", " + props);
    const oneDimensionalArray = props.slice();
    console.log("squares: " + oneDimensionalArray);
    const twoDimensionalArray = oneDimensionalArray.map((element) => [element]);

    for (let row = 0; row < oneDimensionalArray.length / 6; row++) {
        // Loop through each column on the board
        for (let col = 0; col < oneDimensionalArray.length / 7; col++) {
            // Check if there is a winner
            console.log(twoDimensionalArray);
            console.log("row: " + row + " col: " + col + " , " + twoDimensionalArray[row][col]);
            try {
                if (twoDimensionalArray[row][col] === twoDimensionalArray[row][col + 1] && twoDimensionalArray[row][col] === twoDimensionalArray[row][col + 2] && twoDimensionalArray[row][col] === twoDimensionalArray[row][col + 3]) {
                    console.log("win");
                    return true;
                }
                if (twoDimensionalArray[row][col] === twoDimensionalArray[row + 1][col] && twoDimensionalArray[row][col] === twoDimensionalArray[row + 2][col] && twoDimensionalArray[row][col] === twoDimensionalArray[row + 3][col]) {
                    console.log("win");
                    return true;
                }
                if (twoDimensionalArray[row][col] === twoDimensionalArray[row + 1][col + 1] && twoDimensionalArray[row][col] === twoDimensionalArray[row + 2][col + 2] && twoDimensionalArray[row][col] === twoDimensionalArray[row + 3][col + 3]) {
                    console.log("win");
                    return true;
                }
                if (twoDimensionalArray[row][col] === twoDimensionalArray[row - 1][col + 1] && twoDimensionalArray[row][col] === twoDimensionalArray[row - 2][col + 2] && twoDimensionalArray[row][col] === twoDimensionalArray[row - 3][col + 3]) {
                    console.log("win");
                    return true;
                }
            } catch (e) {
                console.log("error" + e);
            }
            console.log("no win");
        }
    }
    return false;
}

export default checkWin;