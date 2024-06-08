const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})
// map return value if store in var and without writing return keyword if we are not using scope{}

const newNums = myNumers
                .map((num) => num * 10 ) //multiplied by 10
                .map( (num) => num + 1) //adding one
                .filter( (num) => num >= 40)//showing only those who has greater than 40

console.log(newNums);

// const nums=myNumers.map().map().filter() called chaining of methods or functions