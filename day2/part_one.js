const fs = require("fs");
const input = fs.readFileSync("./day2/input.txt").toString();
let lines = input.split(/\r?\n/);

const rock = 1;
const paper = 2;
const scissors = 3;

const win = 6;
const draw = 3;
const loss = 0;

score = {
    "A X": rock + draw,
    "A Y": paper + win,
    "A Z": scissors + loss,
    "B X": rock + loss,
    "B Y": paper + draw,
    "B Z": scissors + win,
    "C X": rock + win,
    "C Y": paper + loss,
    "C Z": scissors + draw
}

pointsCount = () => {
    let points = 0;
    for (var i = 0 ; i < lines.length ; i++) {
        points += score[lines[i]];
    }

    return points;
}

pointsCount()