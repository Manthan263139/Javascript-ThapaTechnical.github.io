// Control Statement and loops

// if else

var tomr='rain';
if(tomr=='rain'){
    console.log("Take a raincoat")

}
else{
    console.log("no need to take the raincoat")
}

// Challange time
// check a year a leap year or not 

var year=2020
if(year%400==0){
    console.log("yes it is a leap year")
}
else if(year%100==0){
    console.log("Not a leap year")
}
else if(year%4==0){
    console.log("Is a leap year")
}
else{
    console.log("Not a leap year")
}



// 1- What is truty and falsy values in javascript
// 5 falsy values in javascript 0,undefined,null,NAN,false is false



// Conditional Ternary Opearator 
// It is a type of opearator that takes three operands

// variablename=(condition)? value1:value2

var age =19
console.log((age>= 18)? 'you can vote':'you cannot vote')




// switch statement
// FIND the area of circle, triangle and rectangle

//var area='circle';
//var pI=3.142,l=5,b=4,r=3
//switch(area){
    //case 'circle':
      //console("The area of the circle is :"+pI*r**2);
      //break;
    //case 'triangle':
       //console.log("The area of triangle id" +(l+b)/2);

    //default:
        //console.log("Plase enter the valid data ")

//}
// so this is  a switch statement in javascript


// While Loop Statement
//var num=0
// block scope First check the condition then go to the statement
//while(num<=1000){
    //console.log(num)
    //num++
    
//}


// Do While Loop
//var num=0
//do{
    //console.log(num)
    //num++
//}while(num<=10)


// For Loop
var num=0
for(var num=0;num<=10;num++){
    console.log(num)
}


// Challenge time
// Program to print the table of the given number(8,9,12,15)

// Table of 8
var x=1
for(var x =1;x<=10;x++){
var tableOf=8
    console.log(tableOf + " * " + x + " = "+ tableOf * x)
}

// Table of 3
var x=1
for(var x =1;x<=10;x++){
var tableOf=3
    console.log(tableOf + " * " + x + " = "+ tableOf * x)
}









