// Date and Time in Javascript

// Javascript Date  objects represent a single moment in time in a platform -independent format. Date objects contain a Number that represent millisecond since 1 january 1970 UTC


// Create a Date Objects 
// new Date()
//new Date(year,month,day,hours,minutes , seconds , milliseconds)
// new Data(milliseconds)
//new Data(date string)


// let currDate = new Date()
// console.log(currDate)
// console.log(new Date())
// console.log(new Date().toLocaleDateString())
// console.log(new Date().toString())

// Note - Javascript count months from 0 to 11

// var d=new Date(2023,7,18)
// console.log(d.toLocaleDateString())


// Date Methods 

// const curDate=new Date()
// console.log(curDate.toLocaleDateString())
// console.log(curDate.getFullYear())
// console.log(curDate.getMonth())
// console.log(curDate.getDate())
// console.log(curDate.getDay())


// const curDate=new Date()
// console.log(curDate.setFullYear(2023))
// console.log(curDate.setFullYear(2024,10,5))
// console.log(curDate.setMonth(10))
// console.log(curDate.setDate(5))





// Time Method
// const curTime=new Date()
// console.log(curTime.getTime())
// // getTime() method returns the number of milliseconds since January1,1970
// console.log(curTime.getHours())
// console.log(curTime.getMinutes())
// console.log(curTime.getSeconds())
// console.log(curTime.getMilliseconds())


// how to set The Individual time
// const curTime=new Date()
// console.log(curTime.setTime())
// // getTime() method returns the number of milliseconds since January1,1970
// console.log(curTime.setHours())
// console.log(curTime.setMinutes())
// console.log(curTime.setSeconds())
// console.log(curTime.setMilliseconds())


// Chalenge time
let curDate=new Date()
console.log(new Date().toLocaleTimeString())// for only time
console.log(new Date().toLocaleDateString())// for only Date














