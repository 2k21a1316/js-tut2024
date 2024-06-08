const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
// this keyword makes current context mean using this access the variable of inside the user

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);this keyword represent current context which is global and output is {}

// browser me jo global object hai wo window object hai
// but not environment like github having empty object 

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);//here this is not working becouse of function,,undefined is output , in above we used this in the object
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);//same problem here //here this is not working becouse of function
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);//but no problem here 
}
// so arrow function me this use nhi kar sakte but reguler function me hum use kar sakte 
// arrow function me function keyword use nhi karte but arrow => use karte hai


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2//explicite return
// }

// const addTwo = (num1, num2) =>  num1 + num2  //implicite return  arrow function ,no need to write return and {}

// const addTwo = (num1, num2) => ( num1 + num2 ) //same //implicite return  arrow function ,if you use {} must to write return but if you use() then no need to write to return 

const addTwo = (num1, num2) => ({username: "hitesh"}) //to return object ,use ()


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
// myArray.forEach(function (){})
// myArray.forEach(()=> return {})
// myArray.forEach(()=> ())

