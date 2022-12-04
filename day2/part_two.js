const fs = require("fs");
const input = fs.readFileSync("./day2/input.txt").toString();
let lines = input.split(/\r?\n/);

const gamePoints = {
    "X": 0,
    "Y": 3,
    "Z": 6
}

itemTable = {
    "A": {
        points: 1,
        defeats: "C",
        defeatedBy: "B",
        ...gamePoints
    },
    "B": {
        points: 2,
        defeats: "A",
        defeatedBy: "C",
        ...gamePoints
},
    "C": {
        points: 3,
        defeats: "B",
        defeatedBy: "A",
        ...gamePoints
    }
};

let firstLetter = new String;
let myItem = new String;
let myPoints = 0;

countPoints = () => {
    for (var i = 0 ; i < lines.length ; i++) {
        firstLetter = lines[i][0];
        secondLetter = lines[i][2];

        myPoints += itemTable[firstLetter][secondLetter];
    
        if (secondLetter == "X") {
            myItem = Object.values(itemTable[firstLetter]["defeats"]);
            myPoints += itemTable[myItem]["points"];
        } else if (secondLetter == "Y") {
            myItem = itemTable[firstLetter];
            myPoints += myItem["points"];
        } else {
            myItem = Object.values(itemTable[firstLetter]["defeatedBy"]);
            myPoints += itemTable[myItem]["points"];
        }
    }
    return myPoints
}

countPoints();