const user ={
    username:"sanjay",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`)
    }
}

user.welcomeMessage()
user.username = "Sam"
user.welcomeMessage()