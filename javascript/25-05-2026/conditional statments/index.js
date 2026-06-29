let age = 20;
let marks = 75;
let day = 2;

// 1. if statement
if (age >= 18) {
  console.log("You are Adult");
}

// 2. if...else statement
if (age >= 18) {
  console.log("Eligible to vote");
} else {
  console.log("Not eligible to vote");
}

// 3. if...else if...else
if (marks >= 90) {
  console.log("A Grade");
} 
else if (marks >= 70) {
  console.log("B Grade");
} 
else {
  console.log("C Grade");
}

// 4. switch statement
switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("Invalid Day");
}

