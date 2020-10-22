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
        console.log(boringAppartments(y))
    }
}


function boringAppartments(data) {


    let result = [];
    let set = new Set();


    //function to check every number is same
    function test_same_digit(num) {
        const first = num % 10;
        while (num) {
            if (num % 10 !== first) return false;
            num = Math.floor(num / 10);
        }
        return true
    }

    let found = false;
    for (let i = 1; i <= data; i++) {

        let res = `${i}`;
        let d = `${i}`;
        let repeatedTimes = 1;
        if (found) {
            break
        }

        while (Number(res) < 10000) {

            if (Number(res) == data) {
                set.add(`${res}`);
                found = true;
                break;
            }

            if(test_same_digit(Number(res)) && !set.has(`${res}`)){
                set.add(`${res}`);
                result.push(res)
            }
            res = d.repeat(repeatedTimes)
            repeatedTimes++;
        }
    }

    let res = Array.from(set);
    let ans = 0;
    for(let i=0; i < res.length;i++){
        let len = res[i].length || 0;
        ans +=len
    }
    return ans;

}
