//cat q3.text | node q3.js
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });

    main();
});

function readline() {
    return inputString[currentLine++];
}
// Make a Snippet for the code above this and then write your logic in main();


function main() {
    const x = readline();
    for (let i = 0; i < x; i++) {
        let y = readline();
        let z = readline().split(" ");
        console.log(DominantPiranha(y, z))
    }
}


function DominantPiranha(len, data) {

    let max = 0;
    let min = 0;

    for (let i = 0; i < data.length; i++) {

        max = data[i] > data[max] ? i : max;
        min = data[i] < data[min] ? i : min
    }

    if (max == min) return -1; // all number are same
    for (let i = 0; i < data.length; i++) {
        if (data[i] == data[max] && (data[i - 1] < data[i]) || (data[i + 1] < data[i])) {
            return i + 1
        }
    }

    return -1;
}