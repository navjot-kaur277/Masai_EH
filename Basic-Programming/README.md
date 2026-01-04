# Basic Programming

This repository was created as part of the "Your First Repo" assignment. It demonstrates basic JavaScript function implementation and Git workflow using branches and pull requests.

---

## 🧩 Problem Statement

Create a repository named `Basic-Programming`, clone it to your local system, and complete the following tasks:

1. Create a file called `index.js`.
2. Write a function called `isPrime(num)` that checks whether a number is prime.
3. Add, commit, and push this code to the `main` branch.
4. Create a new branch called `checkEvenOdd`.
5. Write a function called `evenOdd(num)` that checks whether a number is even.
6. Add, commit, and push this code to the new branch.
7. Merge the new branch into `main` using a Pull Request.

---

## 🧠 Functions Implemented

### 1. `isPrime(num)`
Checks whether a given number is a prime number.

**Logic:**
- Returns `false` if `num <= 1`.
- Loops from 2 to `num - 1` to check for divisibility.
- Returns `true` only if no divisors are found.

**Example:**
```javascript
console.log(isPrime(7));   // true
console.log(isPrime(10));  // false
