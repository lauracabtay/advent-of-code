const fs = require("fs");
let input = fs.readFileSync("./day5/input.txt").toString();
input = input.replaceAll(/[a-zA-Z]/g, "");
let lines = input.split(/\r?\n/);

const arrOfArr = new Array;

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

const crates = [
    ['Z','V','T','B','J','G','R'],
    ['L','V','R','J'],
    ['F','Q','S'],
    ['G','Q','V','F','L','N','H','Z'],
    ['W','M','S','C','J','T','Q','R'],
    ['F','H','C','T','W','S'],
    ['J','N','F','V','C','Z','D'],
    ['Q','F','R','W','D','Z','G','L'],
    ['P','V','W','B','J']
];

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

convertInstructions(lines);
moveContainers(crates, arrOfArr);
fetchTopItems(crates);