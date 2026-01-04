let nums = [10,3,7,20,13,2];
// Using Map:
let squares = nums.map (n=>n*n);
console.log(squares);

// Using Filter:
let isPrime = n => {
    if (n<2) return false;
    for (let i =2; i<= Math.sqrt(n); i++) {
        if (n%i === 0) return false;
    }
    return true;
};

let primes = nums.filter(isPrime);
console.log(primes);

// Using reduce 
let sum = nums.reduce((acc,val) => acc + val , 0);
console.log (sum);

// Using Sort
let sorted = [...nums].sort((a , b) => b - a);
console.log(sorted);
