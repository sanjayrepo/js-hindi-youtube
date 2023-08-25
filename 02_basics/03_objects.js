//singleton
// Object.Create

//object literals


const mySym = Symbol("Key1")

const JsUser ={
    name:"Sanjay",
    fullName:"Sanjay Pradhan",
    [mySym] :"Key1",
    age: 18,
    location:"Pune",
    email: "sanjay@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser.mySym);
// console.log(typeof JsUser[mySym]);


JsUser.email ="sanjay@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email ="sanjay@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

