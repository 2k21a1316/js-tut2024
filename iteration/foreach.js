const coding = ["js", "ruby", "java", "python", "cpp"]

// with reguler function 
// coding.forEach( function (val){//this function is running in array
//     console.log(val);//no need to give increment and length condition and initialisation
// } )

// call back function not having name
// with arrow function 
// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// give reference of existing function not execution
// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

