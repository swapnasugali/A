//Flattening array
//converting a nested array(array in array) into a single array

//flatten one level
let arr = [1,2,3,[4,3],[2,1]]
console.log(arr.flat())

//flatten two level
let arr1 =[1,2,[3,4,[3,4]]]
// console.log(arr1.flat(1))
console.log(arr1.flat(2))


//all levels
let arr2 = [1,[2,[3,[4,[5,[6,[7]]]]]]]
console.log(arr2.flat(Infinity))


//removing duplicate elements
//eleminating duplicate values in an array
//keeping only unique values

//set()
var m = [1,2,3,4,3,2,1]
console.log([...new Set(m)]);

//indexOf()
var n = []

for(i of m){
    if(n.indexOf(i) == -1){
        n.push(i)
    }
}
console.log(m)
console.log(n)

//map
let arr9 = [10, 20, 30];
console.log(arr9.map(i => i + 10));
console.log(arr9.map(i => i*5));
console.log(arr9.map(i => i-5))


//filter()
let s1 = [10,23,4,56,77,0,78,25,0]
console.log(s1.filter(i =>i>4))
console.log(s1.filter(i =>i%2 == 0))
console.log(s1.filter(i => i !== 0))


//reduce()

//sum of array
let arr4 = [10,23,42,56]
console.log(arr4.reduce((a, b) => a+b, 0))

//product of array
let arr5 = [10,20,30]
console.log(arr5.reduce((a, b ) => a*b, 1))

//maximum numbers
let arr6= [12,34,3,21,56,43,87,54]
console.log(arr6.reduce((a, b) => a>b ? a: b))
console.log(arr6.reduce((a, b) => a<b ? a: b))


//for each()
//it gives the both keys and values
m.forEach((i,j )=> {
    console.log(i,j)
});

//sum using foreach()
let arr11 = [1, 2, 3, 4, 5];
let sum = 0;
arr11.forEach(num => {
    sum = sum+num

}
);
console.log(sum);

//multiply  using foreach()
let arr22 = [1,2,3,4,5];
arr22.forEach(num => {
    console.log(num*2);
});



