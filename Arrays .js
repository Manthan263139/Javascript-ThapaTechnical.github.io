// Array in Javascript
// When we feel like storing multiple values in one varaiable then insted of this we use array
//var myFriends=['ramesh','arjun','vishal',true,52]
// In javascript we will store diffrent type of data types in array
//console.log(myFriends[3])


// Traversal of an Array
//var myFriends=['ramesh','arjun','vishal']
//console.log(myFriends[3])
//console.log(myFriends.length)

// For in loops and For of Loops
//var myFriends=['ramesh','arjun','vishal','manthan']
//for(var i=0;i<myFriends.length;i++){
    //console.log(myFriends[i])
//}

// In for in loops we can find the index of array element
//for(let elements in myFriends){
    //console.log(elements)
//}

// In for of loops return the data of the array elements
//for(let elements of myFriends){
    //console.log(elements)
//}





// Searching and Filter in an Array
// indeof()
//var myFriends=['ramesh','arjun','vishal','manthan']
//console.log(myFriends.indexOf('ramesh'))


// Perform CRUD
//const animals=['pigs','goats','sheep']
//const count=animals.push('chicken')
//console.log(count)
//console.log(animals)

//const animals=['pigs','goats','sheep']
//const count =animals.push('chicken')
//console.log(animals)

//const animalss=['pigs','goats','sheep']
//const counts =animals.pop('pigs')
//console.log(animals)




// Chanlenge Time
//const months=['Jan','march','April','June','July']

// 1-add december at the end of the array
// 2-What is the return value of splice method
// 3-Update march to March 
// 4-Delete june from an array

//const months=['Jan','march','April','June','July']

// sol1
//const newMonth=months.splice(months.length,0,'Dec')
//console.log(months)


// sol2
//console.log(newMonth)

// sol3
  //const updateMonth=months.splice(1,1,"March")
  //console.log(months)




  // V v v impt-->
  // Map(),Reduce(),Filter()

  // In Map() return a new array containing the results of calling a function on every element in this array

  //const array1=[1,4,9,16,25]
  // num>9
  //let newArr=array1.map((curEle,index,arr)=>{
    //return curEle>9

  //})
 // console.log(array1)
 // console.log(newArr)


 //let newArr=array1.map((curElm,index,arr)=>{
    //return `Index no=${index} and the value is ${curElm} belong to ${arr}`

 //})
 //console.log(newArr)
 // It does not muted the current array 


 

 // Challenge Time
 //1- Find the square root of each element in an array
 // let arr=[25,36,49,64,81]
 //let arr=[25,36,49,64,81]
 //let arrSqr=arr.map((curElm)=>{
    //return Math.sqrt(curElm);
 
 
 
//})
//console.log(arrSqr)


// 2- Multiply each element by 2 and return only those elements which are greater than 10
//let arr=[2,3,4,6,8]
// we can use the chaning method
//let arr2=arr.map((curElm)=>{
    //return curElm*2
//).filter((curElem)=>{
    //return curElem>10
//})
//console.log(arr2)


// Reduce Method
//let arr3=[5,6,2]
//let sum=arr.reduce((accumulator,curElem,index,arr)=>{
//return accumulator+=curElem

//})
//console.log(sum)


// Combination of Map method reduce method and filter method
//let arr2=arr.map((cur Elem)=>curElem*2).


//let  arr=[5,6,2]
//let sum=arr.reduce ((accumulator,curElem,index,arr)=>{
   // return accumulator+=curElem
//})
//console.log(sum)



// How to Flattern an  array
//convertiong 2d and 3d array into one dimensional array

const arr=[
    ['zone 1','zone2'],
    ['zone 2','zone 4'],
    ['zone 5','zone 6'],
    ['zone 7','zone 8']



];
let flatArr=arr.reduce((accum,curVal)=> {
return accum.concat(curVal)

})
console.log(flatArr)
 




 













