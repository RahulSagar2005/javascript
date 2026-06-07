const name1="hitesh" 
const repoCount=50 
console.log(name1+repoCount+" Value")// not recomended statement 
/*backticks -> In JavaScript, backticks ( ` ) are used to create template literals.
They provide three main features:
1. Multi-line strings 
2. String interpolation (${}) 
3. Easier string construction
*/ 
let text=`hello
world`
console.log(text) 
let name="Rahul"
let age=22 
console.log(`My name is ${name} and I am ${age} years old`)

// declare string using new  
const gameName=new String("Rahul-rs-20") 
console.log(gameName) 
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length) 
console.log(gameName.toUpperCase()) // it has not changed the original string 
console.log(gameName.charAt(2)) 
console.log(gameName.indexOf('h')) 
// if u wnt to see all all method go and check on console 

const newstring=gameName.substring(0,3)
console.log(newstring) 
const anotherString=gameName.slice(-4,5)
console.log(anotherString) 

const newString1="  Rahul   "
console.log(newString1) 
console.log(newString1.trim()) 

const url="https://rahul.com/rahul%20sagar" 
console.log(url.replace('%20','-')) 
console.log(url.includes('sakshi')) 
console.log(gameName.split('-'))