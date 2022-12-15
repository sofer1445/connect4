function checkWin(props) {
    console.log("checkWin" + ", " + props);
    const oneDimensionalArray = props.gameBoard.slice();
    console.log("squares: " + oneDimensionalArray + " , " + oneDimensionalArray.length);
    const twoDimensionalArray = oneDimensionalArray.map((element) => [element]);
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

// function checkWin(props) {
//     console.log("checkWin" + ", " + props);
//     const oneDimensionalArray = props.gameBoard.slice();
//     console.log("squares: " + oneDimensionalArray + " , " + oneDimensionalArray.length);
//     // const twoDimensionalArray = oneDimensionalArray.map((element) => [element]);
//
// //     for (let row = 0; row < oneDimensionalArray.length / 6; row++) {
// //         // Loop through each column on the board
// //         for (let col = 0; col < oneDimensionalArray.length / 7; col++) {
// //             // Check if there is a winner
// //             console.log(oneDimensionalArray);
// //             console.log("row: " + props.row + " col: " + props.col + " , " + oneDimensionalArray[row][col]);
// //             try {
// //                 if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row][props.col + 1]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row][props.col + 2]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row][props.col + 3]) {
// //                     console.log("win" + "תנאי ראשון");
// //                     return true;
// //                 }
// //                 if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row +1][props.col]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row+2 ][props.col]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row +3][props.col]) {
// //                     console.log("win" + "תנאי שני");
// //                     return true;
// //                 }
// //                 if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 1][props.col + 1]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 2][props.col + 2]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row + 3][props.col + 3]) {
// //                     console.log("win" + "תנאי שלישי");
// //                     return true;
// //                 }
// //                 if (oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row - 1][props.col + 1]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row - 2][props.col + 2]
// //                     && oneDimensionalArray[props.row][props.col] === oneDimensionalArray[props.row - 3][props.col + 3]) {
// //                     console.log("win" + "תנאי רביעי");
// //                     return true;
// //                 }
// //             } catch (e) {
// //                 console.log("error" + e);
// //             }
// //             console.log("no win");
// //         }
// //     }
// //     return false;
// // }
//
