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
    for(let i =0; i < x ; i++ ){
        const y = readline();
        const d = readline().split("").join("");
      //  console.log(d)
      let f = d[i] == 0 ? 1: 0
      //  console.log(Math.min(flipCount(d,"0"), flipCount(d,"1")))
        console.log(flipCount(d,f))

    }



  function flip(ch){
    return (ch == '0') ? '1' : '0';
  }


  function flipCount(str, expected){
      let count = 0;

      for(let i=0; i < str.length; i++){
          if(str[i] != expected){
              count++
          }

          expected = flip(expected)
      }
      return count;
  }


}
