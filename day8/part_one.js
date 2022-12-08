const fs = require("fs");
const input = fs.readFileSync("./day8/input.txt").toString();
const lines = input.split(/\r?\n/);

countTrees = (grid) => {
    const rowCount = grid.length;
    const colCount = grid[0].length;

    let treeCount = 0;
    let checkHeight = (arr, tree) => arr.filter(element => element >= tree);


    for (let row = 0 ; row < rowCount ; row++) {
        for (let col = 0 ; col < colCount ; col++) {
            
            const currentTree = grid[row][col];

            const checkFromLeft = [];
            const checkFromRight = [];
            const checkFromTop = [];
            const checkFromBottom = [];

            // check if visibility on the left
            for (let i = 0 ; i < col ; i++) {
                checkFromLeft.push(grid[row][i]);
            }

            // check if visibility on the right
            for (let i = colCount -1 ; i > col ; i--) {
                checkFromRight.push(grid[row][i]);
            }

            // // check if visibility on the top
            for (let i = 0 ; i < row ; i++){
                checkFromTop.push(grid[i][col])
            }

            // check if visibility on the bottom
            for (let i = rowCount -1; i > row ; i--){
                checkFromBottom.push(grid[i][col])
            }

            if (checkHeight(checkFromLeft, currentTree).length == 0 ||
                checkHeight(checkFromRight, currentTree).length == 0 ||
                checkHeight(checkFromTop, currentTree).length == 0 ||
                checkHeight(checkFromBottom, currentTree).length == 0
                ) {
                treeCount += 1;

            }
        }
    }
    
    console.log(treeCount);
}

countTrees(lines);