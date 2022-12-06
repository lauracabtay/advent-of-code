const fs = require("fs");
let input = fs.readFileSync("./day5/input.txt").toString();
input = input.replaceAll(/[a-zA-Z]/g, "");
input = input.split(/\r?\n/);

let grid = fs.readFileSync("./day5/crates.txt").toString();
grid = grid.replaceAll("[", " ").replaceAll("]", " ")
grid = grid.split(/\r?\n/);

const arrOfArr = new Array;

transposeGrid = (grid) => {
    let arrOfStack = new Array;
    let transposedStack = new Array;

    for (let column = 0 ; column < grid.length ; column++) {
        arrOfStack.push(grid[column].split(''));
    }

    for (let index = 1; index < 35 ; index += 4) {
        let arr = new Array;
        for (let stack = 0; stack < arrOfStack.length; stack++) {
            if (arrOfStack[stack][index] != ' ') {
                arr.push(arrOfStack[stack][index]);
            }
        }
        arr.pop();
        transposedStack.push(arr);
    }
    return transposedStack;
}

convertInstructions = (input) => {
    let arrOfNum = new Array;
    let inputArr = new Array;

    for (let i = 0 ; i < input.length ; i++) {
        inputArr = input[i].split("  ");
        
        arrOfNum = inputArr.map(function(input) {
            return parseInt(input);
        });
        arrOfArr.push(arrOfNum);
    }
    return arrOfArr;
}

moveContainers = (stack, instructions) => {
    for (let i = 0 ; i < instructions.length ; i++) {
        for (let j = 0 ; j < instructions[i][0] ; j++) {
            stack[instructions[i][2]-1].unshift(stack[instructions[i][1]-1][0]);
            stack[instructions[i][1]-1].shift();
        }
    }
    return stack;
}

fetchTopItems = (crates) => {
    let topItems = '';

    for (let i = 0 ; i < crates.length ; i++) {
        topItems += crates[i][0]
    }

    return topItems;
}

const crates = transposeGrid(grid);
convertInstructions(input);
moveContainers(crates, arrOfArr);
fetchTopItems(crates);