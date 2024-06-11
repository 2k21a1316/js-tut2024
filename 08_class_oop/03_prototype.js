// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);
// console.log(myname.trim.length) but not use 
// prototype in browser console 
// js having prototype behaiviour
// prototype like a properties
// prototypal inheritance

// lower -> upper
// array prototype -> object prototype -> NULL
// string prototype -> object prototype -> NULL
// function prototype -> object prototype -> NULL


let myHeros = ["thor", "spiderman"]//array


let heroPower = {//object
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// prototype me hum apna function bhi add kar sakte hai 
// Object.create is factory function 
Object.prototype.hitesh = function(){//direct upper prototype (object) me ye method add kar diya to sabke pass ye method aa jayega
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

// if array having access of some method then it does not mean that function and stringalso having that access ,so sibling not sharing
// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()//this have no access of heyhitesh

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
// to exchange info between 2 objects used prototype  __proto__ property  
    __proto__: TeachingSupport //tasupport can access the prop of teaching support , is called prototypal inheritance
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);//this mean jisne call kiya uska context
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()