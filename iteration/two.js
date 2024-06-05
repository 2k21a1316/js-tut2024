// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // num is iterator like in c++
    //console.log(num);//no need of increment
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()//unique value and ordered
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

// for(const key of map){
//     console.log(key); //gives many array of pair of key values 
// }
for (const [key, value] of map) {//map destructured in the array
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// object is not iteratable by for of 
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }