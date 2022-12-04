const fs = require("fs");
const input = fs.readFileSync("./day4/input.txt").toString();
let lines = input.split(/\r?\n/);
let count = 0;

for (let i = 0 ; i < lines.length ; i++) {
    const range = lines[i].split(',')[0].split('-')
    range.push(...lines[i].split(',')[1].split('-'))

    arrayOfInt = range.map(function (x) { 
        return parseInt(x); 
      });
    
    const finalArray = new Array;

    for (let j = arrayOfInt[0]; j <= arrayOfInt[1]; j++) {
        finalArray.push(j)
    }

    for (let k = arrayOfInt[2]; k <= arrayOfInt[3]; k++) {
        finalArray.push(k)
    }

    if (finalArray.length != [...new Set(finalArray)].length) {
        count += 1
    }
}

return count;