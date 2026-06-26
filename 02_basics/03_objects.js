// singleton 
// object.create-> constructor way to create object but it is singleton 

// onject using literal 
const ob1={
    name:"Rahul",   // name is always string 
    "full name":"Rahul Sagar"
}

// ******* two ways to access value *********** 
// console.log(ob1["name"])
// console.log(ob1.name)
// console.log(ob1.full name) invalid 
// console.log(ob1["full name"]) valid 

const mysym=Symbol("key1")
const jsuser={
    name:"Rahul",
    [mysym]:"mykey1",
    age:18,
    location:"Agra",
    email:"rahul@gamil.com",
    isloggedin:false,
    lastlogindays:["Monday","Sataurday"]
} 
// console.log(jsuser[mysym]) 
jsuser.email="rahulsagar@gmail.com"
// console.log(jsuser.email)
// Object.freeze(jsuser) // after jthis no changes will be reflected as it freezes the object 
jsuser.email="rahulsagar@google.com"
console.log(jsuser)

jsuser.greet=function(){
    console.log("hello")
}
console.log(jsuser.greet()) 
jsuser.greet1=function(){
    console.log(`hello ${this.name}`)
}
console.log(jsuser.greet1()) 