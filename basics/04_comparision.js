// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); some time give error with diff datatype sometime not 
// console.log("02" > 1);
//avoid these type of conversions
console.log(null > 0);
console.log(null == 0);// ==equality check do no follow conversion ,and === have diff method 
console.log(null >= 0);//comaprision operator follow conversion null to number as 0

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// ===  do stric checking
console.log("2" == 2); //right == do conversion and compare 
console.log("2" === 2);//=== check also datatype//no conversion in this case becouse we using === and both val have diff type