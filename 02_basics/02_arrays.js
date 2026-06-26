const marvel_heros=["thor","Ironman","spiderman"] 
const dc_heros=["superman","flash","batman"] 
// marvel_heros.push(dc_heros) 
// console.log(marvel_heros) 
// console.log(marvel_heros[3][1])
const all_heros=marvel_heros.concat(dc_heros) 
const all_new_heros=[...marvel_heros, ...dc_heros]
// console.log(all_new_heros) 
const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]] 
const real_another_arr=another_array.flat(Infinity)
// console.log(real_another_arr) 

// console.log(Array.isArray("Rahul"))// check whether it is array or not

// console.log(Array.from("Rahul")) // craete array 
// console.log(Array.from({name:"Rahul"}))// empty array 

let s1=100 
let s2=200 
let s3=300 
console.log(Array.of(s1,s2,s3))