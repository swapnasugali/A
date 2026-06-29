//callback function - function passed as an argument to another function and called later when needed
function function1(s){
    console.log(s)
}
function one(a,b,c){ // c is a call back function
    console.log("one is executed")
    c(a+b)
}
one(10,20,function1)


//call back function example
// function calculate(a,b,operation){
//     let result = a+b;
//     operation(result);
// }
// function display(value){
//     console.log(value);
// }
// calculate(10,20,display);


//Promise - after certain time execute code
//resolve - success case
//reject - failure case

//syntax - promise(() => {
    // })

let p = new Promise((resolve,reject) => {
    let status = true
    
if(status){
    resolve("function successful")
}else{
    reject("error")
}
})
//.then() // sucsess case resolve
//.catch() //failure //reject
//.finally() //always runs
.then((a) => {
    console.log(a)
})
.catch((b) => {
    console.log(b)
})

// .finally(() => {
//     console.log("process finished")
// })


//promise example
let promise = new Promise(function(resolve,reject){
    let success = true;

    if(success){
        resolve("Data received");    
    }
    else{
        reject("Error");
    }
});
promise
.then(function(result){
    console.log(result);
})
.catch(function(error){
    console.log(error);
});


//pending - pending when it is waiting for a result and is not finished yet
// let p2 = new Promise((resolve, reject) => {
//     console.log("Promise started");
//    // No resolve()
//    // No reject()
// });
// console.log(p2);


//promise.all() - run multiple promises together and wait until all promises are completed
//Waits for all promises to complete
// Runs promises in parallel
// If any one promise rejects,immediately rejects

let a = Promise.resolve("completed")
let b = Promise.reject("failure")

Promise.all([a,b])
.then((a) => {
console.log(a)
})
.catch((a) => {
console.log(a)
})


//promise.race() - run multiple promises at the same time and returns the result of the first promise, either resolve or reject
let pa = new Promise((resolve,reject) => {
    setTimeout(() =>{
        reject("pa is done")
    },1000)
})
let pb = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("pb is done")
    },500);
})
Promise.race([pa,pb])
.then((s) =>{
    console.log(s)
})
.catch((s) =>{
    console.log(s)
})


//Promise.allSettled() - wait for all promises to complete (success or failure) and returns the result of every promise
let s1 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        reject("done")
    },3000)
})
let s2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("not done")
    },1000)
})

Promise.allSettled([s1,s2])
.then((a) => {
    console.log(a)
})



//Promise.any() - return the first successful (resolved) promise result

let c = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("good")
    },10000)
})
let d = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("bad")
    },3000)
})
Promise.any([c,d])
.then((a)=>{
    console.log(a)
})