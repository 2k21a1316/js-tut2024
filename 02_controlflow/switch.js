// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"

switch (month) {
    //case sensitive
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");//agr break nhi hota to niche ka saara code execute ho jata except default case
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}