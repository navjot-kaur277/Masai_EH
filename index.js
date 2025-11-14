
/**
 * Checks if a number is prime.
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
  if (!Number.isInteger(num) || num < 2) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  const limit = Math.floor(Math.sqrt(num));
  for (let i = 3; i <= limit; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

// simple demo logs
console.log('2 prime?', isPrime(2));     // true
console.log('15 prime?', isPrime(15));   // false
console.log('17 prime?', isPrime(17));   // true

module.exports = { isPrime }; // optional for testing
