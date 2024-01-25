// -> js automatic detec this is number bcz js is dynamic type language
// const score = 400;   

// console.log(score);

// -> we said that is number so far
// const balance = new Number(100)

// console.log(balance);
// console.log(balance.toString().length)

// ->After point number have to show
// console.log(balance.toFixed(1))


const otherNumber = 1000000;
// -> To print number in countery digit in this case i print indian price like this 10,00,000
// console.log(otherNumber.toLocaleString('en-IN'));


// +++++++++++++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
// console.log(Math.random());
// console.log((Math.random()*10)+5);

const x = 1;
const y = 6;

console.log(Math.floor((Math.random()*(y-x+1)+x)));

