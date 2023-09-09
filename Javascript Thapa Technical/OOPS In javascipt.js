// OOPs in Javascript 

// Object Literals 
// Is is basically a key value pairs data structure
// All The variables and function are stored in a single variable

// 1st way
// let bioData={
//     myName: "Manthan Joshi",
//     myAge:20,
//     getData:function(){
//         console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }


// }
// bioData.getData()



// 2nd way no need to write fuctions as well after  es6
// let bioData={
//     myName: "Manthan Joshi",
//     myAge:20,
//     getData(){
//         console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }


// }
// bioData.getData()


// Adding One Object inside the another object
// let bioData={
//     myName:{
//         realName: "Manthan Joshi",
//         channelName: "code With MJ"
//     },
//     myAge:20,
//     getData(){
//         console.log(`My Name is ${bioData.myName} and my age is ${bioData.myAge}`)
//     }


// }
// console.log(bioData.myName.channelName)




// This object
//The defination of 'this' object is that it contain the current context
//  myNames='manthan'
// function myName(){
// console.log(this.myNames)

// }var
// myName()



// Interview Question ----->

const obj={
    myAge:26,
    myName: ()=>{
        console.log(this)


    }


}
obj.myName()












