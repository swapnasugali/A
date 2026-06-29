// console.log("one")
// console.log("two")
// console.log("three")
// //Asynchronous Execution

// // setTimeout -  it executes once
console.log("one")
setTimeout(() =>{
    console.log("two")
},0)


// //1000ms = 1sec
setTimeout(()=> {
    console.log("four")
},2000)
console.log("three")


// // let sum =0;
// // for(i=0; i<1000; i++){
// //     sum += i;
// //     }
// // console.log(sum);


// // setInterval - works as setTimeout, but it executes continously (after every 3 seconds)
let a = setInterval ( () => {
console.log("five")
},3000)


// //clearInterval - stops a setInterval() action from repeating
setTimeout( () => {
   clearInterval(a)
},6000)


// //to print hello world two times
//  // using loop

// //  for(i=0;i<=2;i++){
// //     console.log("Hello World")
// //  }


// //print hello world using setInterval and clearInterval

// let a1 = setInterval( () =>
// {
//     console.log("Hello World")
// },1)

// setTimeout ( () =>
// {
//     clearInterval(a1)
// },100)


// //clearTimeout - stops a setTimeout() action before it runs.

let b = setTimeout(function(){
    console.log("Hello");
},5000);
clearTimeout(b);


