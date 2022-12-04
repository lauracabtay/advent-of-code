const fs = require("fs");
const input = fs.readFileSync("./day3/input.txt").toString();
let lines = input.split(/\r?\n/);

const alphabetArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

getUniqueItems = () => {
    arr = new Array;
    sumPriorities = 0;

    for (let i = 0 ; i < lines.length ; i++) {
        const backpack = (lines[i].split(''));
        const itemCount = (backpack.length);
        const firstHalf = backpack.slice(0, itemCount/2);
        const secondHalf = backpack.slice(itemCount/2, itemCount);

        let uniqueItem = firstHalf.filter(value => secondHalf.includes(value));
        uniqueItem = [...new Set(uniqueItem)]

        sumPriorities += alphabetArray.indexOf(uniqueItem[0]) + 1;
    }
    return sumPriorities;
}

getUniqueItems()