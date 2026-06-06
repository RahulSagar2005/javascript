"use strict" // treat all js code as modern 
// alert(3 + 3) // we are using console.log instead of alert for better debugging and development experience and mainly we are using nodejs, not browser 

console.log(3 + 3); console.log("Rahul")// we can write multiple statements in a single line but it is not a good practice, it is better to write each statement in a new line for better readability and maintainability of code 

let name="Rahul" // string datatype 
let age=20 // number datatype 
let isLoggedin=false // boolean datatype 
let state; // undefined datatype
// numner have range from -(2^53 - 1) to (2^53 - 1) 
// big int is used to store large numbers beyond the range of number datatype 
// string can be defined using single quotes, double quotes or backticks 
// boolean can have only two values true or false 
// symbol is a unique and immutable primitive value and may be used as the key of an Object property  
// null is a standalone value that represents the absence of any object value  

// undifened is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.

// object is a non-primitive data type that allows you to store collections of data and more complex entities. Objects can be created using object literals, constructors, or classes. 

console.log(typeof undefined) // undefined
console.log(typeof null) // object 
console.log(typeof name) // string 
console.log(typeof age) // number 
console.log(typeof isLoggedin) // boolean