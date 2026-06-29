//scope

// var d=10
let d=10
function hai(a,b){
    const m=100
    console.log(m)
console.log(a,b,d)
//block
    {
        var k= 101
        let w = 200
        const r = 300
        console.log(r)
        console.log(k)
        console.log(w)
        console.log(m)
    }
       console.log(k)
    // console.log(w)
    // console.log(r)
    // 
}
hai(1,2)
// console.log(m)
//   console.log(k)


//types of scopes
//global scope
let e = 10;

function show() {
  console.log(e);
}

show();
console.log(e);


//function scope
function test() {
  let q = 5;
  console.log(q);
}

// test();
 console.log(q); 

//block scope
if (true) {
  let y = 55;
  const z = 70;

  console.log(y);
  console.log(z);
}

// console.log(y); 
// console.log(z); 