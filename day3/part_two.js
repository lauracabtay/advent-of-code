const fs = require("fs");
const input = fs.readFileSync("./day3/input.txt").toString();
let lines = input.split(/\r?\n/);

const alphabetArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

getUniqueItems = () => {
    arr = new Array;
    sumPriorities = 0;

    for (let i = 0 ; i < lines.length ; i+=3) {
        const backpack1 = (lines[i].split(''));
        const backpack2 = (lines[i+1].split(''));
        const backpack3 = (lines[i+2].split(''));

        let uniqueItem = backpack1.filter(value => backpack2.includes(value));
        uniqueItem = backpack3.filter(value => uniqueItem.includes(value));
        
        sumPriorities += alphabetArray.indexOf(uniqueItem[0]) + 1;
    }
    console.log(sumPriorities);
}

getUniqueItems()