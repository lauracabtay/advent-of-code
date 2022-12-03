const fs = require("fs");
const input = fs.readFileSync("./day2/input.txt").toString();
let lines = input.split(/\r?\n/);

itemTable = {
    "A": {
        points: 1,
        defeats: "C",
        defeatedBy: "B"
    },
    "B": {
        points: 2,
        defeats: "A",
        defeatedBy: "C"
},
    "C": {
        points: 3,
        defeats: "B",
        defeatedBy: "A"
    }
};

gameTable = {
    "X": {
        result: "lose",
        points: 0
    },
    "Y": {
        result: "draw",
        points: 3
    },
    "Z": {
        result: "win",
        points: 6
    },
}

let firstLetter = new String;
let myItem = new String;
let myPoints = 0;

countPoints = () => {
    for (var i = 0 ; i < lines.length ; i++) {
        firstLetter = lines[i][0];
        myPoints += gameTable[lines[i][2]]["points"];
    
        if (gameTable[lines[i][2]]["result"] == "lose") {
            myItem = Object.values(itemTable[firstLetter]["defeats"]);
            myPoints += itemTable[myItem]["points"];
        } else if (gameTable[lines[i][2]]["result"] == "draw") {
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