// Asynchronous Javascript
// Hoisting in Javascrript is a mechanism where variables and fuctions declarations are moved to top of their scope before thee code
// let cannot be used in hoisting

// Lexical Scoping
// Lexical scoping means now, the inner function can get access to their parent functions variables but the vise versa is not true

// Example
let a ='Hello Guys' // global scope
const first=()=>{
    let b='How are you'
    const second =()=>{
        let c='hii,I am fine thank you'
        // console.log(a+b+c) // we  can use this 
    }
    second()
    console.log(a+b+c) // we can't use this
}
first()




// In javascript Closures are created every time a function is created ,




