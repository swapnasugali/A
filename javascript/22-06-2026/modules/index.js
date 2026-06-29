// we will export - in 2 ways 
//default export - only one export can be done (default keyword)
//we can import with any name
//no need of {}  at the time of import

//named export - n number (export only use)

export default function sum(a,b){
    return a+b
}


import good from './index1.js'

console.log(good)

export let arr = [1,2,3,4]
export let a=10

export function hello(){

}

export function diff(){

}

function bye(){

}


console.log(sum(1,2))



export function add(a,b){
    return a-b;
}
console.log(add(5,7))


import { add1 } from './export/index.js';

console.log(add1(10, 20));
