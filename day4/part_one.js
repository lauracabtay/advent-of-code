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

    if ((
            arrayOfInt[0] >= arrayOfInt[2] &&
            arrayOfInt[0] <= arrayOfInt[3] &&
            arrayOfInt[1] >= arrayOfInt[2] &&
            arrayOfInt[1] <= arrayOfInt[3]
        ) || (
            arrayOfInt[2] >= arrayOfInt[0] &&
            arrayOfInt[2] <= arrayOfInt[1] &&
            arrayOfInt[3] >= arrayOfInt[0] &&
            arrayOfInt[3] <= arrayOfInt[1]
        )){
            count += 1;
        } else {
        count += 0;
    }
}

return count;