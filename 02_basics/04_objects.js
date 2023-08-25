// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id ="123abc"
tinderUser.name ="Sammy"
tinderUser.isLoggedIn =false
// console.log(tinderUser);

const regularuser ={
    name:"som@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sanjay",
            last:"name"
        }
    }
}

// console.log(regularuser.fullname.userfullname.firstname);

const obj1 ={
    1:"a",
    2:"b"
}

const obj2 ={
    3:"a",
    4:"b"
}

const obj4 ={
    5:"a",
    6:"b"
}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3 ={...obj1,...obj2}
// console.log(obj3);


const users = [
    {id:1,
     email:"s@gmail.com"  
    },
    {id:2,
        email:"s@gmail.com"  
    }
]

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLogged'));

const course ={
    coursename :" js in hindi",
    price: "999",
    courseInstructor: "Sanjay"

}

const {courseInstructor: instructor} = course

// {
//     "name":"Sanjay",
//     "coursename" : "js in Hindi",
//     "price": "free"
// }