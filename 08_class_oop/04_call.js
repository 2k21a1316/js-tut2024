function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)//.call explicitely used to call setusername or to hold the reference of the variable of the called function
   
    this.email = email//this to hold the variable of another function into this function ,each function having their this witch is empty object
    this.password = password
}
// call pass current execution ocntext to another function 
const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);