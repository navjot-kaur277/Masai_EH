// Part A : ArrowFunction:
const isEven = n => n % 2 === 0;
console.log(isEven(4)); 
console.log(isEven(7)); 

// Part B: Ternary Operator Rewrite:
const marks = 40;
const result = marks >= 35 ? "Pass" : "Fail";
console.log(result); 

// Arrow Function greet(name) with Ternary
const greet = name => console.log(`Hello, ${name ? name : "Guest"}`);
greet("Sam");   
greet();       
