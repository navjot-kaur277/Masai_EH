// Part 1 : Template Literals + Expressions
// a)
console.log(`5 + 7 = ${5 + 7}`); 
// b)
const message = `This is line one.
This is line two.
This is line three.`;
console.log(message);

// c)
const firstName = "John";
const lastName = "Doe";
console.log(`Full name: ${firstName} ${lastName}`); 

// Part 2 : Arrow Functions & this
// a)
const square = n => n * n;
// b)
const objArrow = {
  value: 50,
  test: () => console.log(this.value)
};
objArrow.test();
// c)
const objNormal = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
objNormal.test();

// Part 3 : Rest, Spread & Copying Objects
// a)
const product = { name: "Pen", price: 10 };
const copy = { ...product };
console.log(copy); 
// b)
const objA = { x: 1 };
const objB = { y: 2 };
const mergedAB = { ...objA, ...objB };
console.log(mergedAB); 
// c)
const maxValue = (...nums) => Math.max(...nums);
console.log(maxValue(3, 7, 2, 9)); 

// Part 4:Destructuring & Optional Chaining
// a)
const arr = [10, 20, 30];
const [z, w] = arr;
console.log(z, w);
// b)
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
console.log(brand); 
// c)
const info = {};
console.log(info?.details?.location); 

// Part 5 :Scoping (let/var/const)
// a)
for (var i = 0; i < 3; i++) {}
console.log(i); 
// b)
// This will throw ReferenceError intentionally, so comment out to run smoothly
// for (let j = 0; j < 3; j++) {}
// console.log(j); // ReferenceError: j is not defined
// c) Why is const used for values that should not be reassigned?
// Ans : const ensures the variable cannot be reassigned. It provides safety for values that must remain constant, like configuration settings or fixed references.

// Part 6: Ternary Operator – Practice
// a)
const kmph = 75; 
let speed = kmph > 60 ? "Fast" : "Normal";
console.log(speed); 
// b)
const age = 20; 
console.log(age >= 18 ? "Adult" : "Minor"); 
// c)
const num = -5; 
console.log(num > 0 ? "Positive" : num === 0 ? "Zero" : "Negative"); 
// Part 7: Spread, Rest & Arrays
// a)
const nums = [1, 2, 3];
const newNums = [...nums, 4, 5];
console.log(newNums); 
// b)
const x = ["x", "y"];
const y = ["z"];
const combined = [...x, ...y];
console.log(combined); 
// c)
function printNames(...names) {
  return names;
}
console.log(printNames("A", "B", "C")); 

// Part 8: Object Destructuring & Shorthand
// a)
const user1 = { id: 101, status: "active" };
const { id: userId, status } = user1;
console.log(userId, status); 
// b)
const adminId = 101;
const role = "admin";
const user2 = { id: adminId, role };
console.log(user2); 
// c)
const personName = "Alex";
const user3 = {
  name: personName,
  greet() {
    return `Hello, ${personName}`;
  }
};
console.log(user3.greet()); 

// Part 9: Template Literals (More Practice)
// a)
console.log(`Today is ${new Date().toDateString()}`);
// b)
const studentName = "Alex";
const score = 85;
console.log(`Hello ${studentName}, your score is ${score}/100`);

// Part 10: Arrow Function Shorthands
// a)
const add = (x, y) => x + y;
console.log(add(2, 3)); 
// b)
const isAdult = age => age >= 18;
console.log(isAdult(20)); 
// c)
const double = num => num * 2;
console.log(double(4)); 

// Part 11: Spread Operator (Arrays & Objects)
// a)
const original = [1, 2, 3];
const clone = [...original];
console.log(clone); 
// b)
const arr2 = [1, 2, 3];
const newArr = [100, ...arr2];
console.log(newArr); 
// c)
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); 

// Part 12: Optional Chaining (More Practice)
// a)
const user4 = {
  name: "Alex",
  address: {
    city: "Bangalore"
  }
};
console.log(user4?.address?.city); 
// b)
console.log(user4?.job?.title); 
// c)
const data = {};
console.log(data?.profile?.email); 
