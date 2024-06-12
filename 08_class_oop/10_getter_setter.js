// class based getter and setter 
class User {
    constructor(email, password){
        this.email = email;//public property
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()//_email private property
        // return this.email.toUpperCase() error 

    }
    set email(value){//_email private property
        this._email = value
        // this.email = value error 

    }

    get password(){ // but showing and giving this value to user 
        //getter used to when i dont want to give the access of password,get the value from outside the class and setter used to set the vlaue into the class
        return `${this._password}hitesh`
        // return `${this.password}hitesh` error 

    }
// getters and setters is method of name of the property 
    set password(value){//we are storing this value in our database, and taking this value, and setters ko return nhi karte
        this._password = value
        // this.password = value error 

    }
    // getter and setter used together
}
// error comes by constructor is also setting value of password and setter is also setting the value of password so there is redundancy
// error is maximum size exceeded of call stack 

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);