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
        const y = readline();
        const d = readline().split("");
        let count1 = 0;
        let count2=0;

        for(let i=0; i < d.length-1;i++){
            if(d[i] == 0 && d[i+1] == 0)count1++;
            if(d[i] == 1 && d[i+1] == 1)count2++;
        }

        console.log(Math.max(count1,count2))
    }



}
