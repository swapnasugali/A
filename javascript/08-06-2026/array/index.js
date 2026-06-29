//Array
//It is a data type 
//It stores the data either it may be Homegeneous or Heterogeneous
//Homogeneous - same data
//Hetereogeneous  - different kind of data
//[] - we used to repesent data 
// , - seperated the values 
//multi dimensional array - array which is present in another array


var arr = [1,2,3,4]
console.log(arr)

//add (push(), unshift(), splice())
//push() - add the element at the ending

arr.push(5)
arr.push(7)
console.log(arr)

//unshift() - add the element at the starting

arr.unshift(6)
console.log(arr)

//splice() - add the elements at any loctaion we want 

var arr1 = [10,20,30,40]
console.log(arr1[0])
console.log(arr1[3])

//splice(index value, deletecount, new)

arr.splice(2,0,"Hello")
console.log(arr)

arr.splice(3,0,"hi")
console.log(arr)


//remove from the array ( pop(), shift(), splice())
//pop()- delete the element from the ending

arr.pop()
console.log(arr)

arr.pop()
console.log(arr)

//shift()- delete the element from the starting

arr.shift()
console.log(arr)

arr.shift()
console.log(arr)


//splice()- delete the element from the any specific location we want

arr.splice(1,1)
console.log(arr)

//splice using add
//splice using add starting

arr.splice(0,0,1,2)
console.log(arr)


//splice using add ending

arr.splice(5,0,6,7,8)
console.log(arr)

//splice using remove
//splice using remove starting 
arr.splice(0,1)
console.log(arr)

//splice using remove ending
arr.splice(7,1)
console.log(arr)
console.log(arr.length)


//By using values find index values
//indexOf

let num = [10,20,30,40]
console.log(num)
console.log(num[3])
console.log(num.indexOf(30))
console.log(num.indexOf(60))


//includes - return true or false

let num1 = [1,2,3,4,5]
console.log(num1)
console.log(num1[3])
console.log(num1.includes(5))
console.log(num1.includes(8))


//lastindexOf - right to left

let a = [1,2,3,2,1,3,4]
console.log(a.lastIndexOf(3))
console.log(a.lastIndexOf(9))
console.log(a.lastIndexOf(1))


//all the elements remove from the array
//1.splice
//2.making array length to 0
//3.assign empty array


let b = [10,20,30,40,50]
console.log(b.length)

//splice
b.splice(0,5)
console.log(b)

//making array length to 0
let c =["apple","banana","mango"]
console.log(c)
c.length=0
console.log(c)


//assign empty array
 let d = []
 console.log(d)


 //combine 2 arrays
 var m = [1,2,3,4,5]
 var n = ["a","b","c","d","e"]
console.log(m,n)
var s = m.concat(n)
console.log(s)

//1.spread operation
var g = [1,2,3]
console.log(...g)
console.log(g)

// for of 
for(k of g){
    console.log(k)
} 

//for in 
let j = [5,6,7,8,9]
for(let i in j){
    console.log(i)
}

//for in - used to index values we get the values
let t = [2,3,4,5,6,7]
for (i in t){
    console.log(t[i])
}

//testing the array
//some and every

let f = [1,2,3,4,5,6]
console.log(f.some(i => i>5))
console.log(f.every(i => i>5))
console.log(f.some(i => i>6))


//join
let e = [1,2,3,4,5]
console.log(e.join(""));
console.log(e.join(" "));
console.log(e.join("-"));
console.log(e.join("    "));

//sort
let num5 = [1,3,2,4,8,5,9,6,0,7]
console.log(num5)
num5.sort()
console.log(num5)

//ascending order
let arr9 = [1,34,56,32,90,3,1,6,89]
arr9.sort((a, b) => a - b);
console.log(arr9)

//descending order
let arr6 = [2,43,78,5,0,76,89,23,45,9]
arr6.sort((a, b) => b - a);
console.log(arr6)


//sort without using sort method
//Ascending order
let arr7 = [1,34,6,8,9,0,23,12,54,67]

for(let i=0; i<arr7.length; i++)
    for(let j =i+1; j<arr7.length; j++)
        if(arr7[i]>arr7[j])
       [arr7[i], arr7[j]] = [arr7[j], arr7[i]];
console.log(arr7)

//descending order
let arr8 = [1,34,6,8,9,0,23,12,54,67]

for(let i=0; i<arr8.length; i++)
    for(let j =i+1; j<arr8.length; j++)
        if(arr8[i]<arr8[j])
       [arr8[i], arr8[j]] = [arr8[j], arr8[i]];
console.log(arr8)


//Ascending order
let arr0 = [12,45,87,34,65,9];
let order1 = arr0.slice().sort((a, b) => a - b);
arr0.sort((a, b) => order1.indexOf(a) - order1.indexOf(b));
console.log(arr0);


//descending order
let arr2 = [12,45,87,34,65,9];
let order2 = arr2.slice().sort((a, b) => b - a);
arr2.sort((a, b) => order2.indexOf(a) - order2.indexOf(b));
console.log(arr2);


//find largest and smallest value in the array
let arrss = [1,2,12,32,14,32]
let max = arrss[0]
let min = arrss[0]

for(i=1;i<arrss.length;i++){
    if(arrss[i]>max)max = arrss[i];
    if(arrss[i]<min)min = arrss[i];
}
console.log("largest:",max)
console.log("smallest:",min)








