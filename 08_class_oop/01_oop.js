const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,
// these above are the properties
    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }

}
// object is basic unit 


//console.log(user.username)
//console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// new Object is new instance mean new empty Object
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)//if we not used new keyword then value will be overwrite
console.log(userOne.constructor);
//console.log(userTwo);
// step 1 new Object is created
// step 2 constructor called by new
// step 3 this take value
// step 4 function return Value
// constructor is reference of ownself
// instanceof read