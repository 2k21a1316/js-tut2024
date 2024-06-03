const accountId = 145555  //constant  , aapki marji semicolon use karo ya nhi
let accountEmail = "vishal@google.com" //variable to avoid problem of scope
var accountPassword = "12345"   //variable there is problem of scope //solution is use let
accountCity = "Delhi"  //way to declare due to secure language but dont use it
let accountState;  //undefined
//accountId=123
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"
console.log(accountId)
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])