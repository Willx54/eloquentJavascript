
// Looping a Triangle
// let hashStr = "";
// while (hashStr.length < 7) {
//     hashStr = hashStr + "#";
//     console.log(hashStr);
// }

//FizzBuzz
// for (let i = 1; i <= 100; i++) {
    
//     if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBuzz');
//     } else if (i % 3 === 0) {
//         console.log('Fizz');
//     }  else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i);
//     }
// }

//Chessboard
let chessboard = '';
let size = 8;
let current = '0';
let rowStarterHash = false;

for (let row=0; row<size; row++) {
    for (let col=0;col < size; col++) {
        chessboard = chessboard + current;
        current == '0' ? current = '#' : current = '0';
    }
    chessboard = chessboard + '\n';
    if (rowStarterHash) {
        current = '0';
    } else {
        current = '#';
    }
    rowStarterHash = !rowStarterHash;
}

console.log(chessboard);

