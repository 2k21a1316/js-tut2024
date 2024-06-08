const name = "hitesh" //use any quote single or double 
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//backticks used to string interpulation to make placeholders ${name} and ${repoCount}

const gameName = new String('hitesh-hc-com')
//here string is object index is key and value is alphabate
// new keyword used for object declaration 


// console.log(gameName[0]);
// console.log(gameName.__proto__); tp access [prototype]


// console.log(gameName.length);
// console.log(gameName.toUpperCase());does not change the original string becouse it is primitive, use stack
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
// know most used strings method for interview

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))//output is false

console.log(gameName.split('-'));//seperator and limit are two arguments that are used