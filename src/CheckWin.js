function checkWin(props) {
    console.log("checkWin" + ", " + props);
    const oneDimensionalArray = props.slice();
    console.log("squares: " + oneDimensionalArray + "," + oneDimensionalArray.length);
    // const twoDimensionalArray = oneDimensionalArray.map((element) => [element]);

    for (let row = 0; row < oneDimensionalArray.length / 6; row++) {
        // Loop through each column on the board
        for (let col = 0; col < oneDimensionalArray.length / 7; col++) {
            // Check if there is a winner
            console.log(oneDimensionalArray);
            console.log("row: " + row + " col: " + col + " , " + oneDimensionalArray[row][col]);
            try {

                if (oneDimensionalArray[row][col] === oneDimensionalArray[row][col + 1]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row][col + 2]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row][col + 3]) {
                    console.log("win" + "תנאי ראשון");
                    return true;
                }
                if (oneDimensionalArray[row][col] === oneDimensionalArray[row + 1][col]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row + 2][col]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row + 3][col]) {
                    console.log("win" + "תנאי שני");
                    return true;
                }
                if (oneDimensionalArray[row][col] === oneDimensionalArray[row + 1][col + 1]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row + 2][col + 2]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row + 3][col + 3]) {
                    console.log("win" + "תנאי שלישי");
                    return true;
                }
                if (oneDimensionalArray[row][col] === oneDimensionalArray[row - 1][col + 1]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row - 2][col + 2]
                    && oneDimensionalArray[row][col] === oneDimensionalArray[row - 3][col + 3]) {
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