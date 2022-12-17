function checkWin(props) {
    console.log("checkWin" + ", " + props);
    const oneDimensionalArray = props.gameBoard.slice();
    console.log("squares: " + oneDimensionalArray + " , " + oneDimensionalArray.length);

    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (oneDimensionalArray[row][col] !== 0 && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row][col + 1] && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row][col + 2] && oneDimensionalArray[row][col] === oneDimensionalArray[row][col + 3]) {
                return oneDimensionalArray[row][col];
            }
        }
    }
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 7; col++) {
            if (oneDimensionalArray[row][col] !== 0 && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row + 1][col] && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row + 2][col] && oneDimensionalArray[row][col] === oneDimensionalArray[row + 3][col]) {
                return oneDimensionalArray[row][col];
            }
        }
    }
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 4; col++) {
            if (oneDimensionalArray[row][col] !== 0 && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row + 1][col + 1] && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row + 2][col + 2] && oneDimensionalArray[row][col] === oneDimensionalArray[row + 3][col + 3]) {
                return oneDimensionalArray[row][col];
            }
        }
    }

    for (let row = 3; row < 6; row++) {
        for (let col = 0; col < 4; col++) {
            if (oneDimensionalArray[row][col] !== 0 && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row - 1][col + 1] && oneDimensionalArray[row][col] ===
                oneDimensionalArray[row - 2][col + 2] && oneDimensionalArray[row][col] === oneDimensionalArray[row - 3][col + 3]) {
                return oneDimensionalArray[row][col];
            }
        }
    }
}

export default checkWin;
