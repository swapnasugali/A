//loops

//types of loops
//for loop
//while loop
//do while
//for of
//for in
//for each

//for loop
//minimum no of iterations 0

// for(initilization;condition;update){

// }

let grades = [5,8,9]
for(let i=0;i<grades.length;i++){
    console.log(i)
    function grade(g){
switch(g){
    case 9:
        console.log("a-grade")
        break;

        case 8:
            console.log("b-grade")
            break;

            case 5:
                console.log("c-grade")
                break;

}
}
grade(grades[i])
}

//condition? true case : false case

// 3 conditions

let day = 2 
day === 1 ? console.log("day one") : 
day === 2 ? console.log("day two") : console.log("day three")

// 2 day two
//3 day three


//while loop
//minimum no of iterations 0
// while(condition){

// }

let i=1
let count = 0
//list first 10 even numbers
while(count<10){
    if(i%2==0){
        console.log(i)
        count++
    }
    i+=1
    // count++
}

//do while
//minimum no of iterations 1

do {
    console.log("Hello")
    
} while (false)

  while(false){

    console.log("Hi")
  }


  //Infinite loop

  //for of arrays // it returns direct value


  let arr=[1,2,3]
  console.log(arr)
  for(a of arr){
    console.log(a)
  }

  let obj={a:"hello",b:"hi"}
  console.log(obj[a])
    console.log(obj["a"])

//for in objects // it returns key based  on that key we will get the value    we can use it on arrays
for(i in arr){
    console.log(i)
}
 for(a of obj){
    console.log(a)
  }

 


