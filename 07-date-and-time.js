// Dates (object)

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);


// way of defining dates
let myCreatedDate=new Date(2024,0,26);
let myCreatedDate2=new Date("2024-01-26");
let myCreatedDate3=new Date("01-26-2024");

// printinh the dates
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate2.toDateString());
// console.log(myCreatedDate3.toDateString());

//printing along with the more details of time 
// console.log(myCreatedDate.toLocaleString());

// current time
let myTimeStamp=Date.now() 

// console.log(myTimeStamp)

// the time of the above date
// console.log(myCreatedDate.getTime());

// The Date.now() returns the current timestamp in milliseconds since January 1, 1970, UTC
console.log(Math.floor(Date.now()/1000)); // it gives the current time in seconds


let newDate=new Date();
console.log(newDate.getDay());


newDate.toLocaleString('default',{
  weekday:"long"
})