//cat q2.text | node q2.js
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
        console.log(Bookshelf(y,z))
    }
}


function Bookshelf(len, data) {

    let ans = 0;

    let firstIndex = data.indexOf("1");
    let lastIndex = data.lastIndexOf("1");

    for (let i = firstIndex; i < lastIndex; i++) {
        if (data[i] == 0) {
            ans++
        }
    }

    return ans;

}