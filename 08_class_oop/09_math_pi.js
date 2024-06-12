const descripter = Object.getOwnPropertyDescriptor(Math, "PI")//to know hidden property of the object

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

// const newobj=Object.create(null) factory function to create object


const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, 'name', {
    //writable: false,
    enumerable: true,//if enumerable is false then name prop is not iterable
    
})

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// by Object.entries we can iterate on entries of the object
for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}
// object is not iterable by default or enumerable