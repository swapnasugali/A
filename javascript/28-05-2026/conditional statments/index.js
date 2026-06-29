//switch
//step value 1-10, 11-20, 21-30, 31-40 (if else if else) 
//exact value 1,2,12,(switch) //when i want to exact value

//syntax

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// switch(valuetocheck){
//     case value1:
//         -----------
//         -----------
//         ----------
//         break;

//         case value2:
//             --------
//             -----------
//             ---------
//             break;

//             case value3:
//                 ----------
//                 -----------
//                 ------------
//                 break;

//                 default:
//                     -----------
//                     -----------
//                     ---------
// }


var marks = 15
switch(marks){
    case 10:
        console.log("c-grade")
        break;

        case 13:
            console.log("b-grade")
            break;

            case 17:
                console.log("a-grade")
                break;

                default:
                    console.log("excelllent")
}


//
function grades(g){
switch(g){
    case 10:
        console.log("c-grade")
        break;

        case 13:
            console.log("b-grade")
            break;

            case 17:
                console.log("a-grade")
                break;

                default:
                    console.log("excellent")
}
}
var gradeA = 10
grades(gradeA)
var gradeB = 13
grades(gradeB)

//ternary operator
//condition? true case : false case

let num = 5;

let result = (num % 2 == 0) ? "Even" : "Odd";

console.log(result);

//

let num1 = -5;

let value = (num1 >= 0) ? "Positive" : "Negative";

console.log(value);


//header export and import
//content
//footer