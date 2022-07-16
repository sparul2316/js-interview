//node into_to_hoisting 


//exhibit -1
// var x = 7;

// function getName(){
//     console.log("Namaste Javascript");
// }

// getName();
// console.log(x); //this code wil print "Namaste Javascript" ans then 7.


//exhibit-> 2

// getName();
// console.log(x);
// var x = 7;

// function getName(){
//     console.log("Namaste Javascript");
// }


// console.log(x); //this code wil print "Namaste Javascript" ans then undefined.


//exhibit-> 3

// getName();
// console.log(x);


// function getName(){
//     console.log("Namaste Javascript");
// }


// console.log(x); //this code wil give error x-> is not defined.


//exhibit-4

// var x = 7;
// function getName(){
//     console.log("Namaste Javascript");
// }
//getName();
// console.log(getName); // didn't invoke


// var x = 7;
// console.log(getName); 
// function getName(){
//     console.log("Namaste Javascript");
// }
// getName();

// console.log(getName); // didn't invoke
// gives us the body of function as stored in memory without even defining it
// it is bcz during memeory allocation when the func is allocateed memory in the value part its entire code is stored while
// a variable is assigned undefind value.


//exhibit-5

// getName();
// console.log(x);

// console.log(getName); 
// var x = 7;

// var getName = () => { // as an arrow function , when getName is an arrow function it behaves like a
//     // variable , default value will be undefined.
//     console.log("Namaste Javascript");
// }

// var getName2= () =>{ // behaves just like a variable , dafault value is undefined

// }
// function getname4(){ // only during this proper funtion declaration the whole body will be stored 
//     // during the memory allocation

// }

//

