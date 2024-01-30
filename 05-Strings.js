 // methods of string -- tUpperCase , slice() , substring , indexOf , charAt , trim , includes , split , etc


const name="rishu"
const repoCount=5

// console.log(name+repoCount+" Value"); // vintage

// console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const game="pubgisgame"
const newString=game.substring(0,3)
console.log(newString);



/* When a negative index is provided, it counts from the end of the string. So, -7 means 7 characters from the end of the string.

The ending index 7 represents the character position up to which the substring should be extracted.*/

const anotherString=game.slice(-7,7)
console.log(anotherString);

// console.log(game.toUpperCase());
// console.log(game.charAt(2));

// console.log(typeof(String));

// console.log(game.indexOf('g'));


const newString1="rishu is my name"
console.log(newString1);
console.log(newString1.trim());

console.log(newString1.replace('u','b'))
console.log(newString1.includes('rish'))
console.log(newString1.split(' '))
console.log(newString1.blink())























/*  

*****NOTE*****

1) String can be denoted using single quote and double quote too


2) String is an object
*/