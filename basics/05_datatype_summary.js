//  Primitive 
//javascript is dynamically typed language datatype determined dynamically

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //no need to define the datatype ,
const scoreValue = 100.3 //decimal and float both comes under number

const isLoggedIn = false
const outsideTemp = null//type is object
let userEmail; //undefined

const id = Symbol('123')//return type we get is symbol
const anotherId = Symbol('123')//these both val is diff due to symbol func or type

console.log(id === anotherId);//false output

// const bigNumber = 3456543576654356754n



// Reference type(Non primitive)

// Array, Objects key-value pairs, Functions

// Return type of variables in JavaScript
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

const heros = ["shaktiman", "naagraj", "doga"];//type is object array
let myObj = {
    //collection of diff datatype values
    name: "hitesh", //string//object
    age: 22,//number//object
}
// datatype of object is object 
const myFunction = function(){
    console.log("Hello world");
}
//myfunction datatype is objectfunction

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3