// declare the object by literal or constructor
// singleton object by constructor
// not singleton by literals
// singleton
// Object.create //construct method singleton create

// object literals

const mySym = Symbol("key1")

// in the arrays keys are index and you cant define it

//not empty object
// system interpretate key as string 
const JsUser = {
    name: "Hitesh",
// console.log(JsUser["full name"])
    "full name": "Hitesh Choudhary", 
    [mySym]: "mykey1",//accessing symbol as key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// accessing the object 
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)//not make changes in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user"); 
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());// greeting is the key of object mean function is not executed just referenced function anonymous
console.log(JsUser.greetingTwo());

// ******************************************************* part 2 object *******************************************


// const tinderUser = new Object() singleton object
const tinderUser = {} //not singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);//fullname? optional chaining this ? symbol makes protection used for api response which check this value exist or not ,if exist then proceed further
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
                           //target,resource
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}//...spread operator most used method to combine two objects
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));datatype is array
// console.log(Object.values(tinderUser));same
// console.log(Object.entries(tinderUser));array of key value pair

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// ********************************************************************part-3************************************************************************

destructure and json api intro
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// bydefualt props in (props.company) so directly we use ({company}) that is destructuring in react
// const navbar=({})=>{

// }
// navbar(company="vishal")

// api mean apna kaam kisi aur se karwana
// before times value comes in xml now comes in json from the backend


// json  javascript object notation 
// object format

{
"name":"hitesh",
"coursename":"js in hindi",
"price":"free"
}
//fetch method used

// sometime api value int api format 
// randomusermi api 
// jason formatter used 

// arrat format 
[
    {},
    {},
    {}
]