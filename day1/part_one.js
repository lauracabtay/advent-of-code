const fs = require("fs");
const input = fs.readFileSync("./day1/input.txt").toString();
let lines = input.split(/\r?\n/)

const mainArray = new Array;
let arr = new Array;

let sumCalories = () => {
    for (var i = 0 ; i < lines.length ; i++) {
        if (lines[i] == '') {
            const initialValue = i == lines.length -1 ? parseInt(lines[i]) : 0;
            const calSum = arr.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                initialValue
            );
            mainArray.push(calSum);
            arr = new Array;        
        } else {
            arr.push(parseInt(lines[i]));
        }
    }
    maxCal = Math.max(...mainArray);
    return maxCal;
}

sumCalories();

