//string methods

let str = "i like javascript"

console.log(str.length) //length
console.log(str.toUpperCase())//captial
console.log(str.toLowerCase())//small
console.log(str.trim())//clear gaps starting and ending
console.log(str.charAt(4))//return value based on index value
console.log(str.at(-1))//given value from the last
console.log(str.indexOf("i"))//return index value
console.log(str.lastIndexOf("a"))//last occurence
console.log(str.includes("like"))//return true or false
console.log(str.includes("python"))
console.log(str.startsWith("Java"))//checking starting character return true or false
console.log(str.startsWith("i"))
console.log(str.endsWith("script"))//checking ending character return true or false

let str1 = "javascript"
console.log(str1.slice(0,5))//extract part of a string
console.log(str1.slice(-4))
console.log(str1.substring(0,2))//similar to slice
console.log(str1.replace("javascript", "SQL"))  //replace value

let str2 ="apple apple apple";
console.log(str2.replaceAll("apple","orange"))//replace all values
console.log(str.repeat(6))//repeat no of times based on condtion

let num = "5";
console.log(num.padStart(3, "0"));//adds characters at beginning
console.log(num.padEnd(3, "1"));//adds characters at ending

let str4 = "I like SQL";
console.log(str4.match(/SQL/));//searches using regular expression return array
console.log(str4.search("SQL"));//return index of match
console.log(str4.valueOf());//return primitive string value

//generate random numbers from 1 to 10 using math.random math object
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
