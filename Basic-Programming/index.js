function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

// Example usage:
console.log(isPrime(7)); // true
console.log(isPrime(10)); // false


function evenOdd(num) {
    return num % 2 === 0;
}

// Example usage:
console.log(evenOdd(4));  // true (even)
console.log(evenOdd(7));  // false (odd)