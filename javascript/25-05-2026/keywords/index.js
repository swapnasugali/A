// variable keywords
let age = 20;
const name = "Ravi";

// class (OOP keywords)
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let p1 = new Person(name);
p1.greet();

// conditional keywords
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// loop keywords
for (let i = 1; i <= 3; i++) {
  if (i === 2) continue;
  console.log("Loop:", i);
}

// function keywords
function add(a, b) {
  return a + b;
}

console.log("Sum:", add(5, 3));

// error handling keywords
try {
  let marks = 75;

  if (marks < 0) {
    throw "Invalid Marks";
  }

  console.log("Marks:", marks);

} catch (error) {
  console.log("Error:", error);

} finally {
  console.log("Done");
}

// async keywords
async function demo() {
  let data = await Promise.resolve("Data Loaded");
  console.log(data);
}

demo();

// special keywords
console.log(typeof age);
console.log(p1 instanceof Person);
