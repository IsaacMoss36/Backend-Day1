// function evenfunc() {
// for (let i = 1; i <= 10; i++) {
//     console.log(i, i*2);
// }
// }
// function odd() {
// for (let i = 1; i <= 10; i++) {
//     console.log(i, i*2 -1);
// }
// }

// let temp = process.argv;
// // console.log(temp[0]);
// // console.log(temp[1]);
// // console.log(temp[2]);


// if(temp[2].toLowerCase() === 'even') {
//     evenfunc();
// }
// else {
//     odd();
// }

let input = process.stdin;
let total = 0;
let counter = 0;
input.on('data', (value) => {
    let inputValue = (String)(value).trimEnd();
    
    if(inputValue == 'end') {
        console.log(`total: ${total}`);
        console.log(`avg: ${(total) / counter}`);
        process.exit();
    }
    total += parseInt(inputValue);
    console.log(`you have enetered ${inputValue}`);
    counter++;
});