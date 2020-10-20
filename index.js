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
    var line2 = readline();

    foo(x);
    foo(line2);
}

/*
INPUT

2 3 4 5


var x = readline();

print(x);


*/


/*
INPUT

2 3 4 5


var x = readline().split(' ');  // x is an array now [2,3,4,5]

print(x);


*/




/*

INPUT

3

3 4 5

6 7 8

9 10 11


var x = readline(); // first line of input usually gives the no. of test cases,i.e, the no. of lines ahead.

var inp; // declaring the variable outside the loop

for(var i = 0 ; i < x ; i++) {

inp = readline().split(" ");

print(inp);

}


*/
function foo(x) {
    process.stdout.write("hello: ");   // without auto '\n' (newline)
    console.log(x);  // with auto '\n' (newline)
}



//testing

/*

paste your input in a text file input.txt
then
$ cat input.txt | node main.js output on console.
$ cat input.txt | node main.js > output.txt output in file.

*/