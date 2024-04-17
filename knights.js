#!/usr/bin/env node

// ~~~~~~~~~KNIGHTS TRAVAILS~~~~~~~~~~~~
//    _______________
// 7 |_|#|_|#|_|#|_|#|
// 6 |#|_|#|_|#|_|#|_|
// 5 |_|#|_|#|_|#|_|#|
// 4 |#|_|#|_|#|_|#|_|
// 3 |_|#|_|#|_|#|_|#|
// 2 |#|_|#|_|#|_|#|_|
// 1 |_|#|_|#|_|#|_|#|
// 0 |#|_|#|_|#|_|#|_|
//    0 1 2 3 4 5 6 7
//
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


function generateArrayOfPossibleMoves(x,y) {
    const deltaX = [1, 1, -1, -1, 2, 2, -2, -2];
    const deltaY = [2, -2, 2, -2, 1, -1, 1, -1];
    const possibleMoves = [];

    for (let i = 0; i < deltaX.length; i++) {

        const newX = (x + deltaX[i]);
        const newY = (y + deltaY[i]);

        if (newX < 8 && newX >= 0 && newY < 8 && newY >= 0) {
            possibleMoves.push([newX, newY]);
        }
    }
    return possibleMoves;
}


function generateBoard() {

    const adjacencyList = {}

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            adjacencyList[`${x},${y}`] = generateArrayOfPossibleMoves(x, y);
        }
    }
    return adjacencyList;
}

const chessBoard = generateBoard();


function knightMoves(start, target) {

    const visited = new Set();
    const queue = [[start]];

    while (queue.length > 0) {
        let currentPath = queue.shift();
        const currentSquare = currentPath[currentPath.length - 1];
        visited.add(currentSquare);

        if (currentSquare[0] === target[0] && currentSquare[1] === target[1]) {
            return currentPath;
        }

        let possibleMovesArray = chessBoard[currentSquare];

        possibleMovesArray.forEach((coord) => {
            if (!visited.has(coord)) {
                const newPath = [...currentPath, coord];
                queue.push(newPath);
            }
        });
    }
    return null;
}

let one = [3,3];
let two = [4,4];

console.log(knightMoves(one, two));