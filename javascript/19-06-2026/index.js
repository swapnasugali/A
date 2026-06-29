//async and await
async function greet(){
    return "Hello World";
}
greet()
.then((r)=>{
    console.log(r);
});


//

async function getData(){
    return "Data received";
}
getData()
.then((a)=>{
    console.log(a);
})
.catch((e)=>{
    console.log(e);
});


