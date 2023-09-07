

// function sayMyName(){
//     console.log("S");
//     console.log("A");
//     console.log("N");
//     console.log("J");
//     console.log("A");
//     console.log("Y")
// }

// // sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);
// }

// const result =addTwoNumbers(3,4)

// // console.log("Results :" +result)

// function loginUserMessage(username){
//     if (username === undefined){
//         console.log("Please Enter A User Name")
//         return

//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("Sanjay"))

function calculateCardPrice(...num1){
    return num1
}

console.log(calculateCardPrice(200, 400, 500,2000));

const user ={
    username: "Sanjay",
    price: 199
}
function handelObj(anyObj){
    console.log(`username is ${anyObj.username} and price is ${anyObj.price}`);
}

handelObj(user)
