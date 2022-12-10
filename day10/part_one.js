const fs = require("fs");
const input = fs.readFileSync("./day10/input.txt").toString();
const lines = input.split(/\r?\n/);

checkCycle = (signalStrength, cycle, x) => {
    if (cycle == 20 || (cycle - 20) % 40 == 0) {
        signalStrength.push(x * cycle);
    }
}

sumSignalStrength = (input) => {
    let x = 1;
    let signalStrength = [];
    let cycle = 1;

    while (cycle < input.length) {
        for (let i = 0 ; i < input.length ; i++) {
            let line = [];
            line = input[i].split(" ");

            if (input[i] == 'noop') {
                checkCycle(signalStrength, cycle, x);
                cycle++;
            } else {
                for (let addxCycle = 0 ; addxCycle < 2 ; addxCycle++) {
                    checkCycle(signalStrength, cycle, x);
                    cycle++;
                }
                x += parseInt(line[1])
            }
        }
    }
    return signalStrength.reduce((a,b) => a + b, 0);
}

sumSignalStrength(lines);