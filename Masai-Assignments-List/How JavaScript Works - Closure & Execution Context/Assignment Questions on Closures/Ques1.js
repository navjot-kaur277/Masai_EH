// Task 1: Implement the createCounter function
function createCounter() {
    let count = 0; 

    return {
        increment: function() {
            count++;
            console.log("Current count:", count);
        },
        decrement: function() {
            count--;
            console.log("Current count:", count);
        }
    };
}

// Example Usage
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 

// Task 2: Explanation of Closures
// Closures allow a function to access variables from its outer scope even after the outer function has finished executing. In this example:

// count is a variable declared inside createCounter.

// increment and decrement are inner functions that close over count, meaning they retain access to it.

// Even though createCounter finishes running, the returned object’s methods still access and modify count.

// This encapsulation ensures count is not directly accessible from outside, preserving data privacy.

// Task 3: Behavior with Multiple Counters 

const counter1 = createCounter();
const counter2 = createCounter();

counter1.increment(); 
counter1.increment(); 

counter2.increment(); 
counter2.decrement();
