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
    return mainArray
}

let sumTopThree = (mainArray) => {
    const maxToMinCal = [...mainArray];
    maxToMinCal.sort((a,b) => b - a);
    topThreeSum = maxToMinCal[0] + maxToMinCal[1] + maxToMinCal[2]

    for (var i = 0 ; i < 3 ; i++) {
        console.log(`Elf ${mainArray.indexOf(maxToMinCal[i])} carries ${maxToMinCal[i]} calories`);
    }
    console.log(`The sum of the calories carried by the Top 3 elves is ${topThreeSum}`)
}

sumTopThree(sumCalories());