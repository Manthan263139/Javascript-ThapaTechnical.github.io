// Advanced Javascript
// Event Propagation(Event Bubbling  and  Event Capturing )


// call back function
// const calculator=(num1,num2,operator)=>{
//     return operator(num1,num2)
// }
// console.log(calculator(5,2,subs))


//  Interview Qurestion-->Diffrence between higher order function and call back function
// const add=(a,b)=>{
//     return a+b
// }
// const subs=(a,b)=>{
//     return Math.abs(a-b)
// }
// const mult=(a,b)=>{
//     return a*b
// }
// const calculator=(num1,num2,operator)=>{
//     return operator(num1,num2)
// }
// console.log(calculator(5,2,add)) // calculator is higher order function and add is a callback function



// Interview Questions --> Diffrence between synchronous and Asynchronous Javascrript

// Synchronous Javascript one by one execution
// const fun2=()=>{
//     console.log("Function 2 is called")
// }
// const fun1=()=>{
//     console.log("funtion 1 is called")
//     fun2()
//     console.log('Function 1 is called')
// }
// fun1()

// Aynchrous Javascipt
// execute after the specific period of time




// Event Loops




// Interview Ques-->
// Function currying 
// What is the output of sum(5)(3)(8)?

function sum(num1){
    //console.log(num1)
    return function(num2){
        //console.log(num1,num2)
        return function(num3){
            console.log(num1+num2+num3)
        }
    }

}
sum(5)(3)(8)




















