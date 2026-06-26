
// *************** creating empty object *******************
// const tinderuser= new Object() this is a singleton object
// const tinderuser={} not a singleton object 
// console.log(tinderuser) 


const tinderuser={} 
tinderuser.id="123abc" 
tinderuser.name="Sammy" 
tinderuser.isloggedin= false 

// console.log(tinderuser) 

const regularuser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Rahul",
            lastname:"Sagar"
        }
    }
}
// console.log(regularuser.fullname.userfullname.firstname) 

const ob1={1:"a",2:"b"}
const ob2={3:"a",4:"b"}
const ob4={5:"a",6:"b"}
// const ob3=Object.assign({},ob1,ob2,ob4)
//  console.log(ob3)  
const obj3= {...ob1, ...ob2,...ob4} 
// console.log(obj3); 

const user=[
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    },
    {
        id:1,
        email:"r@gmail.com"
    }
]
// console.log(user[1].email)
// console.log(tinderuser) 
// console.log(Object.keys(tinderuser)) // array 
// console.log(Object.values(tinderuser)) 
// console.log(Object.entries(tinderuser)) 
// console.log(tinderuser.hasOwnProperty('name'))// return true is it has tht key 
 

const course={
    coursename:"js in hindi",
    price:999,
    courseInstructure:"hitesh"
}
const {courseInstructure:instructure}=course// destructuring
console.log(instructure) 

const navbar=({company})=>{

}

// ***************json syntax***************8

// {
//     "name":"rahul",
//     "coursename":"js in hindi",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]


// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }