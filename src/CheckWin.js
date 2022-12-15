function checkWin(props) {
    console.log("checkWin" + ", " + props);
    const oneDimensionalArray = props.gameBoard.slice();
    console.log("squares: " + oneDimensionalArray + " , " + oneDimensionalArray.length);
    // const twoDimensionalArray = oneDimensionalArray.map((element) => [element]);

    for (let row = 0; row < oneDimensionalArray.length / 6; row++) {
        // Loop through each column on the board
        for (let col = 0; col < oneDimensionalArray.length / 7; col++) {
            // Check if there is a winner
            console.log(oneDimensionalArray);
            console.log("row: " + props.row + " col: " + props.col + " , " + oneDimensionalArray[row][col]);
            try {

                if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row][props.col + 1]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row][props.col + 2]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row][props.col + 3]) {
                    console.log("win" + "תנאי ראשון");
                    return true;
                }
                if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 1][props.col]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 2][props.col]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 3][props.col]) {
                    console.log("win" + "תנאי שני");
                    return true;
                }
                if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 1][props.col + 1]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 2][props.col + 2]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 3][props.col + 3]) {
                    console.log("win" + "תנאי שלישי");
                    return true;
                }
                if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row - 1][props.col + 1]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row - 2][props.col + 2]
                    && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row - 3][props.col + 3]) {
                    console.log("win" + "תנאי רביעי");
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