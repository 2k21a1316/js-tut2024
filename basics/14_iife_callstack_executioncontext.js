// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE which executed immediately
    console.log(`DB CONNECTED`);
})();//here semicolon need to execute next iife and to terminate the execution of 1st one
// iife used for avoid pollution of globle scope
//iife used to 
// ()() //1st one is definition of function and 2nd one is execution

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')//hitesh is the argument of this function


// *******************************************************javascript execution conetext**************************************************************************************
// javascript execute or run our program in two phase 

// global exection context [{}] which contains this keyword or the variable 
// gec of node env and browser is diff
// gec execute in thread
// javascript is single threaded

// 3rd is eval execution context 
// 2nd one is functional execution context 

// code run in two phase 
// 1st is memorey creation phase in which memory allocate for the variable
// 2nd is execution phase 

let val1=10
let val2=5
 function addnum(num1,num2){
let total=num1+num2
return total
 }
 let result1=addnum(val1,val2)
 let result2=addnum(10,2) 

//1 global execution phase this 



//2 memory creation val1=undefined ,val2=undefined,addnum=defination of function {let total=num1+num2 ;return total},result1=undefined,result2=undefined




// 3 execution phase val1=10,val2=5,addnum having seprate execution context  which contains[new variable env+execution thread] and memory phase and execution phase for function  which is called new execution context create during each execution of function and deleted after the execution 





// for result1
// 3.1 memory creation val1=undefined,val2=undefined,total=undefined
//3.2 execution phase num1=10,num2=5,total=15 and this total value return in global execution context deleted the new execution context
// and initialise to result1 as 15 and 



// now same for result 2


// ****************************************call stack call the function in dfs manner lifo way**********************************/
// which have execution context at the top then this will execute first 

function one() {
    console.log("one")
    two()
}
function two() {
    console.log("two")
    three()
}
function three() {
    console.log("three")
}

one()
two()
three()

execute all these code in browser source and see working of call stack and execution of code by making checkpoint on line   
console.log("two")
console.log("one")
console.log("three")
one()
two()
three()




