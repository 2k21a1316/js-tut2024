// Dates
// base jan 1 1970 utc
let myDate = new Date()//made instance of the objects current instance
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 0, 23)//0 is month
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);//for the polls etc
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));convert milisecond to second ,interview

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//+1 for index which start with 0
console.log(newDate.getDay());//day start with monday

// `${newDate.getDay()} and the time `

const date=newDate.toLocaleString('default', {
    weekday: "long", 
})
console.log(date)