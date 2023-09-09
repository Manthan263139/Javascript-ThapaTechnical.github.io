// String in Javascript
//1- Escape character
//2- Finding a String in a  String
//3- Searching for a string in a string
// 4- Extracting String parts 
// 5- Replacing String Parts 
// 6- Extracting  String Charactor
// 7- Other useful Method


//var myName="manthan Joshi"
//var myPetName=new String("Mukul Joshi")
//console.log(myName)
//console.log(myPetName)
//console.log(myName.length)

// Escape Character 
//let anySentence="we are the so -calld \"programmer\"that is manthan joshi"
//console.log(anySentence)

// Finding a string in a string

//const myBioData='I am a good Programmer '
//console.log(myBioData.indexOf("good"))



// Searching for a string in a string
//const myAuto="My name is Manthan joshi "
//let sData= myAuto.search("Manthan")
//console.log(sData)


// Extracting string Parts
// slice,substring,substr
//slice
//var str='Apple, Banana,Kiwi'
//let res=str.slice(0,5)
//console.log(res)


// Chalenge time
// Q-1 Display only 280 Character of a string like the one used in Twitter
 

// substring is similar to slice method but it cannot accept the negative index

//var str='Apple, Banana,Kiwi'
//let res=str.substring(7,5)
//console.log(res)




// Replacing String Content()
// Replace method is case sensitive 
//var myData=" I am a programmer and freelancer"
//let replaceData=myData.replace("programmer","PROGRAMMER")
//console.log(replaceData)



// Extracting string charator method 
// charAt(position)
// charCodeAt(position)
// Property access


// CharAt
//let str1="Hello World"
//console.log(str1.charAt(0))


// CharCodeAt return unicode of the index sprecified in a string 
//let str3="Manthan joshi"
//console.log(str3.charCodeAt(0))


// Return unicode of a last character in a string
let str4="HELLO WORLD"
let lastChar=str4.length-1
console.log(lastChar)
console.log(str4.charCodeAt(lastChar))



// Property Acess
var str="Hello Manthan"
console.log(str[1])





// Other Useful Method

//toUpperCase and toLowerCase
// var str1="Manthan Joshi"
// console.log(str1.toLowerCase())
// console.log(str1.toUpperCase())


// Concat  method
let fName="Manthan"
let lName="Joshi"
console.log(`${fName} is the first Name  ${lName} is the last name`)




// Imp--> converting  a string into array by split() Method
var txt="a,b,c,d,e"
console.log(txt.split(","))
console.log(txt.split(" "))
console.log(txt.split("|"))















