// Part A: What is the output?
if (true) {
    let x = 10;
    var y = 20;
}
console.log(y); // ✅ Output: 20
// console.log(x); 
// ❌ ReferenceError: x is not defined

// Part B: Access safely using optional chaining
const profile = {
  user: {
    details: {
      email: "test@mail.com"
    }
  }
};

console.log(profile?.user?.details?.email); // "test@mail.com"
// console.log(profile?.user?.details?.phone); 
// undefined (no error)

// Part C :Example where optional chaining prevents runtime error
const data = {
  settings: null
};

console.log(data.settings?.theme); //  Output: undefined (no error)
