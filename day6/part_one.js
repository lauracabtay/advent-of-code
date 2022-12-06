const fs = require("fs");
const input = fs.readFileSync("./day6/input.txt").toString();
const distinctNumOfChar = 4;

getFirstMarker = (stream, int) => {
    let marker = 0;

    for (let i = 0 ; i < stream.length ; i++) {
        let arr = stream.slice(i, i + int)
        if ([...new Set(arr)].length == int) {
            marker = i + int
            break;
        }
    }
    return marker;
}

getFirstMarker(input, distinctNumOfChar);