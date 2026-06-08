// Dates 
let myDate=new Date() 
// console.log(myDate) 
// console.log(myDate.toString()) 
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString()) 
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toJSON()) 
// console.log(typeof myDate)

// let myCreateddate=new Date(2023,0,23)// months are zero based on zero indexing 
// let myCreateddate=new Date(2023,0,23,5,3) 
// let myCreateddate=new Date("2023/01/14")// here months starts 01 
let myCreateddate=new Date("01-14-2023")
// console.log(myCreateddate.toLocaleString()) 

let myTimeStamp=Date.now() 
// console.log(myTimeStamp)//
// console.log(myCreateddate.getTime()) 
// console.log(Date.now()) // milli second  
// console.log(Math.floor(Date.now()/1000)) // in seconds  


let newDate=new Date() 
// console.log(newDate) 
// console.log(newDate.getMonth()+1) 
// console.log(newDate.getDay()) 


newDate.toLocaleString('default',{
    weekday:"long" 
})


