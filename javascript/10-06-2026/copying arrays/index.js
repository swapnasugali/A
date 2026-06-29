//arrays
var arr = [923, 232, 44, 12,[45,67,88]]

//normal copy
var copy = arr
console.log("arr", arr)
arr[0]=10
console.log("copy",copy)
console.log("arr", arr)
console.log(arr[4][0])


//shallow copy
var copy1 = [...arr];
arr[0]=9999;
copy1[2]=250;
copy1[4][0]= 1000;
console.log("original",arr)
console.log("copy1",copy1)


//deep copy
var copy2 = JSON.parse(JSON.stringify(arr))
console.log(copy2)
copy2[4][0]="hello"
console.log(copy2)
console.log(arr)


