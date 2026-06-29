//objects
//copy in objects
//there are 3 ways to copy objects in javascript

//normal copy - with the help of (=) Assignment operator
//same memory location used
var obj = {name:"swapna",age:22,adress:"atp"}
console.log(obj)
obj1 = obj;
console.log(obj1)
obj1.phnumber = 6847657957;
console.log(obj1)
console.log(obj)
delete obj1.age
console.log(obj)
console.log(obj1)


//shallow copy - with the help of spread operator

var original = {a:"one",b:"two",obj:{c:"three",d:"four"}}
var copy = {...original}

copy.obj.e="five"
original.obj.t="five"
original.obj.f="six"
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
var original = {a: "one",b: "hello",c: 20,obj1: {a: "hello",b: "hi" }}
var copy2 = JSON.parse(JSON.stringify(original))
console.log("copy2", copy2)
original.one = "good morning"
copy2.obj1.a = "good afternoon"
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

