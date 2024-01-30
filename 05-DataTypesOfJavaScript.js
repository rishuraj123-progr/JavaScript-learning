// *** primitive data types***

// const score=100;
// const scoreValue=100.3;

// const isLoggedIn=false;
// const outsideTemp=null;
// let userEmail;

// const id=Symbol('123');
// const anotherId=Symbol('123');

// console.log(id==anotherId);

// const bigNumber=847534896658n;




// ***non primitive ***




// const heroes=["shaktiman" , "nagraj" , "doga"]
// let myObj={
//   name:"rishu",
//   age:22
// }


// const myFunction=function(){
//   console.log("hello");
// }





//                 stack(primitive) , 
 /* if memory , object  is under stack then we get a copy and original me koi change nahi aayega*/

//             heap  (non-primitive)
 /* if memory , object  is under heap then we get a refernce of orginal value so jo v change karenge wo original value change hoga*/


let myYoutubeChannel= "Flameboy"

let anotherName=myYoutubeChannel;

anotherName="TeachersClub"


console.log(myYoutubeChannel)
console.log(anotherName)

let user1 ={
  email:"user@google.com" ,
  UPI:"user1@ybl"
}

let user2=user1 
user2.email="rishu@google.com"

console.log(user1.email);
console.log(user2.email);























































//                        NOTE 


// ************************
// JavaScript is a dynamically typed language because we dont have to specify the data types eg - const score=100 , here we dont have to specify that score will hold a number so it is nynamically typed




// **********************
// Primitive data 
//(they are call by value mean whenever we copy them at that time ,  referencce of memoery is not given rather it is copied and given)

// 7 types : String , Number , Boolean , null(empty) , undefined , Symbol , BigInt



// Non Primitive (Reference type)
// Array , Objects , functions



// ******************
// Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object