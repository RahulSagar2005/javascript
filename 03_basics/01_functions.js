function saymyname(){
    console.log("R")
    console.log("a")
    console.log("h")
    console.log("u")
    console.log("l")
}
//saymyname is a reference
// saymyname()

function addtwonumbers(num1,num2){// num1,num2 are parameter 
   // console.log("Rahul")
    return (num1+num2) // after return statement no lines are executed 
    console.log("sagar")
}
const result=addtwonumbers(3,5)// 3,8 is arguments 
// console.log("result",result) 

function loginusermess(username="sam"){
    if(!username){        // undefined is false, " " empty string is false
        console.log("please enter a user name")
        return
    }
    return `${username} just logged in`
}
console.log(loginusermess("rahul"))