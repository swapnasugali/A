//objects
//copy in objects
//there are 3 ways to copy objects in javascript

//normal copy - with the help of (=) Assignment operator
//same memory location used
var obj = {name:"siri",age:26,adress:"anantapur"}
console.log(obj)
obj1 = obj;
console.log(obj1)
obj1.phnumber = 74804970958;
console.log(obj1)
console.log(obj)
delete obj1.age
console.log(obj)
console.log(obj1)


//shallow copy - with the help of spread operator
//copy - primitive only change in copy
//refrence change both copy and original 

//original- primitive only change original not copy
//refrences copy and original both change 

var original = {a:"one",b:"two",obj:{c:"three",d:"four"}}
var copy = {...original}

copy.obj.e="five"
copy.g="eight"
console.log("original",original)
console.log("copy",copy)
original.obj.t="five"
console.log("original",original)
console.log("copy",copy)
original.f="six"
console.log("original",original)
console.log("copy",copy)
original.s="seven"
console.log("original",original)
console.log("copy",copy)

//
var ref7 = {a:"one",b:"two",c:"three"}
var copy7 = {...ref7}

copy7.e="five"
ref7.f="six"
console.log("copy7",copy7)
console.log("ref7",ref7)


//
var original = {a:"one", b:"hello", c:20, obj:{a:"hello", b:"hi"}}
var copy = {...original}
copy.obj.a = "good morning"
original.k ="bye"
console.log("copy",copy)
console.log("original",original)


//deep copy - with the help of JSNO.parse(JSON.stringify)
//copy - primitive change only in copy
//refrence change only copy

//original - primitive change only original
//reference - change only original

var ref1 = {a:"hello",b:"hi",c:"how are you"}
var copy1 = JSON.parse(JSON.stringify(ref1))
console.log(ref1)
console.log(copy1)

ref1.d="good morning"
console.log("ref1",ref1)
console.log("copy1",copy1)

copy1.e="good afternoon"
console.log("ref1",ref1)
console.log("copy1",copy1)

//
var original = {a: "one",b: "hello",c: 20,obj1: {a: "hai",b: "hi" }}
var copy2 = JSON.parse(JSON.stringify(original))
console.log("copy2", copy2)
original.one = "good morning"
copy2.e="good"
copy2.obj1.a = "good afternoon"
original.obj1.d="good night"
console.log("original", original)
console.log("copy2", copy2)


//normal copy
var obj5 = {
    name : "swapna",
    age : 22,
    adress : "atp",
   
     contact: {
        phone: "9876543210",
        email: "swapna@gmail.com"
   }
}

var obj6 = obj5
console.log(obj5)
console.log(obj6)
obj6.salary = 10000
obj6.contact.phone = 10000
console.log(obj5)
console.log(obj6)


