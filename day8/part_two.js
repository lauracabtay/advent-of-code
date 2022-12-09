const fs = require("fs");
const input = fs.readFileSync("./day8/input.txt").toString();
const lines = input.split(/\r?\n/);

countTrees = (grid) => {
    const rowCount = grid.length;
    const colCount = grid[0].length;
    const scenicScoreArr = [];

    for (let row = 0 ; row < rowCount ; row++) {
        for (let col = 0 ; col < colCount ; col++) {
            
            const currentTree = grid[row][col];
            let treeCountLeft = 0;
            let treeCountRight = 0;
            let treeCountTop = 0;
            let treeCountBottom = 0;

            // check if visibility on the left
            for (let i = col - 1 ; i >= 0 ; i--) {
                treeCountLeft += 1;
                if (grid[row][i] >= currentTree) {
                    break;
                }
            }

            // check if visibility on the right
            for (let i = col + 1 ; i < colCount ; i++) {
                treeCountRight += 1;
                if (grid[row][i] >= currentTree) {
                    break;
                }
            }

            // // check if visibility on the top
            for (let i = row - 1 ; i >= 0 ; i--){
                treeCountTop += 1;
                if (grid[i][col] >= currentTree) {
                    break;
                }
            }

            // check if visibility on the bottom
            for (let i = row + 1; i < rowCount ; i++){
                treeCountBottom += 1;
                if (grid[i][col] >= currentTree ) {
                    break;
                }            
            }
            const scenicScore = treeCountLeft * treeCountRight * treeCountTop * treeCountBottom;

            console.log(treeCountLeft);
            console.log(treeCountRight);
            console.log(treeCountTop);
            console.log(treeCountBottom);

            scenicScoreArr.push(scenicScore);
        }
    }
    return Math.max(...scenicScoreArr);
}

console.log(countTrees(lines));