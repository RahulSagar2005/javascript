// array 

const myArr=[0,1,2,3,4,5] 
const myHeros=["shaktiman","naagraj"]
const newArr2=new Array(1,2,3,4,5,6)
// console.log(myArr[0]) 
// Array methods 
// myArr.push(6)
// myArr.push(7) 
// myArr.pop() 
// myArr.unshift(8)// insert the element at first 
// myArr.shift()
// console.log(myArr.includes(2)) 
// console.log(myArr.indexOf(3))
// const newArr=myArr.join()
// console.log(myArr)
// console.log(newArr)// all values are converted into string 


// slice splice 
console.log("A ",myArr) 
const m1=myArr.slice(1,3) 
console.log(m1) // last range not included 
console.log("B ",myArr) 
const m2=myArr.splice(1,3) 
console.log(m2) // last range included and the portion is removed form the original array 
console.log("C ",myArr) 