//var c = 300 makes problem so dont use var and sinple variable declaration

// global scope 
let a = 300
if (true) {
    // blockscope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}
// global scope is different in browser and nodejs

// {} objects declaration
// but {} with function and for and if else called scope 

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))
// it does not give error 
function addone(num){
    return num + 1
}



addTwo(5)//gives error
// it calls hosting 
// add two holds the function which can be accessible only after the intialisation of the function
const addTwo = function(num){
    return num + 2
}