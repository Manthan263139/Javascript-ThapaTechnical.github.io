// Ecmascript is a modern javascript

// Imp---->  Diffrence between Let Vs Const vs Var
// we cannot change the contant[cont] variable
//var myName ='Manthan joshi'
//console.log("myName")
//myName='mukul joshi'
//console.log(myName)

// let myName ='Manthan joshi'
// console.log("myName")
// myName='mukul joshi'
// console.log(myName)

//But in case of const it gives an error
// if we use var we change our data any one in any time 

// let and const having block scope




// Template literals(Template strings)
// for(let num=1;num<=10;num++){
//     let tableOf=12
//     console.log(`${tableOf}*${num}=${tableOf*num}`);
// }


// Default parameter




// Fat  Arrow function 

// const sum=() => {
//     let a=5,b=6
//     let sum=a+b
//     return `The sum of two number is ${sum}`

// }
// console.log(sum())

// // this can be writtern in short form using fat arrow function
// const add =() => `The sum of two number is ${(a=5)+(b=6)}`



// Array Destructuring
// const myBiodata=['Manthan','Joshi','20']
// let myFName=myBiodata[0]
// let myLName=myBiodata[1]
// let myAge=myBiodata[2]
// console.log(myAge)

// let [myFName,myLName,myAge]=myBiodata
// console.log(myFName)

// we can add the values to 
// let [myFName,myLName,myAge,myDegree='Btech']=myBiodata
// console.log(myDegree)



// Object Properties
// we can use Dynamic Properties


// Spread operater
// const color=['red','green','blue','white']
// const myColors=['red','green','blue','white','yellow','black']
// const MyFavColor=[...color,'yellow','black']
// console.log(MyFavColor)





// ES7

const color=['red','green','blue','white']
const isPresent=color.includes('purple')
console.log(isPresent)


// ES8
// Study with the website
// String padding
// Object.values()
// Object.entries()

// Object. values()
const person={name:  'Fred',age: 87}
console.log(Object.values(person))


// arr.flat() Flattern The array
// Object.fromEntries


// ES 20
// BigInt
let oldNum=Number.MAX_SAFE_INTEGER;
console.log(oldNum)

// use strict method








