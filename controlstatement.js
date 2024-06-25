// const marks = 100;
// // name: 'arun',
// // email: 'arunchamling@gmail.com',


// let percentage = marks / 5;
// if (percentage >= 80) {
//     console.log('distinction');
// } else if (percentage >= 60 && percentage < 80) {
//     console.log('first divison');
// } else if (percentage >= 40 && percentage < 60) {
//     console.log('second divison');
// } else if (percentage >= 35 && percentage < 40) {
//     console.log('third divison');
// } else {
//     console.log('you are fail');
// }
// let percentage1 = marks / 5;
// if (percentage >= 80)


const percentage=20 ;
switch (true) {
    case (percentage >= 80):
         console.log("distinction")
        break;
    case (percentage >= 60 && percentage <= 80):
        console.log("first division");
        break;
    case (percentage >= 40 && percentage <= 60):
        console.log('second division');
        break;
    default:
        console.log('yoou are fail')
        break;
}

// task 2
// calculate
// a. annual salary after tax
// b.monthly sllary after tax
// c. annual tax to be paid
// d.monthly tax to be paid
// consider the software developer earn rs. 5000000 yrly before tax
// if annual incoime is less than 5000000 => tax = 1%
// if annual incoime is less than 2000000more => tax = 15%
// if annual incoime is less than 3000000more => tax = 20%
// if annual incoime is less than 1000000more => tax = 25%
// if annual incoime is less than 1500000more => tax = 30%
// above any of the mentioned , more => tax  = 36%

// var salary = 5000000
// let taxamount = 0;

// if (salary <= 5000000) {
//     taxamount = salary * 0.01
// }else if{

// // }

// switch (day) {
//     case "sunday":
//         console.log("holiday");
//         break;
// }


// loop iterate
/*
 * dowhile
 * while
 * for
 * for-of
 * for in
 * map filter foreach reduce some each every
 * .map .filter .foreach .reduce .some .each .every
 * do while loop
 * sta te
 *
 * statement
 */

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (i === 10) {
//         break;

//     }

// }

let amount = 2;
let iterations = 0;
const rupes = 2*10**7;

while (amount<rupes) {
    amount *= amount;
    // amount++;
    iterations++;
    console.log(`Iteration ${iterations}: ${amount}`);
    
}
console.log(`It took ${iterations} iterations to reach 2crore`);
// let amount = 2;
// let rupes = 2*10**7;

// for (let i = 0; i < length; i++) {
    
    
// }