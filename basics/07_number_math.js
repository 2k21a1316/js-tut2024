const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);//output comes with type of the value ,new used in objects

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));//used for ecommerce applications 1 mean 1 zero 100.0 , 2 mean 100.00 

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); returns string , priority before decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));//commas by usa standard  by default,en-IN by indian standard

// +++++++++++++ Maths +++++++++++++++++++++++++++++ is object

// console.log(Math);
// console.log(Math.abs(-4));//-=>+ ,+=>+
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));high
// console.log(Math.floor(4.9));low
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());//between 0 and 1
console.log((Math.random()*10) + 1);//min 1 not 0
console.log(Math.floor(Math.random()*10) + 1);//

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)