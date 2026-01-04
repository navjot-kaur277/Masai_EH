// Part A : Tempelate String 
const username = "John";
const course = "JavaScript";
console.log(`Hello ${username}, welcome to the ${course} course!`);

// Part B: Object Shorthand:
const name = "Sam";
const age = 21;

const student = {
  name,
  age,
  greet() {
    console.log("Hello");
  }
};

student.greet();

// Part C : Arrow Function with Implicit Return
const getFullName = (first, last) => `${first} ${last}`;
console.log(getFullName("Sam", "Smith")); 

