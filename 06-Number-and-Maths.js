// ***************** Numbers*******************

// const score=400;
// console.log(score);

// const balance =new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(5));

// const otherNumber=23.8966;

// // for precision the value before decimal is given the priority 
// console.log(otherNumber.toPrecision(3));


// // localeString is used to change the 0000000 in simple form ---- en-IN means in indian form
// const hundreds=1000000;
// console.log(hundreds.toLocaleString('en-IN'));






//    ****************** Maths *********************

// console.log(Math);
// console.log(Math.abs(-3)); // absolute value
// console.log(Math.round(4.3)); // rounding off to nearest value
// console.log(Math.ceil(4.6)); // to round off to the top value
// console.log(Math.floor(4.8)); // to round off to the bottom value
// console.log(Math.random());


const min=10;
const max=20;

console.log(Math.floor(Math.random() * (max-min+1))+min);
