/* Sum All Primes

Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    For Loops

    Array.prototype.push()
*/

// My Solution (mostly from the hints):

function sumPrimes(num) {
  var result = 0;
  
  function getPrimes(number) {
    var primeArr = [];
    var compArr = [];
    
    for (let i=2; i<=number; i++) {
      if (!compArr[i]) {
        primeArr.push(i);
        for (let j=i << 1; j<=number; j+=i) {
          compArr[j] = true;
        }
      }
    }
    return primeArr;
  }
  
  var primeArr = getPrimes(num);
  for (let k=0; k<primeArr.length; k++) {
    result += primeArr[k];
  }
  return result;
}

sumPrimes(10);

//FCC Basic Code Solution:

function sumPrimes(num) {
  var res = 0;

  // Function to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

// test here
sumPrimes(10);


/*Code Explanation:

    Create a function that generates the numbers from 1 to num and check if they are prime along the way.
    Declare the variables that will be needed.
    Start with 2, if it has not been marked and added to the sieve array then it is a prime and we add it to the prime array.
    Add the others to the sieve array.
    Return the primes
    Loop through the returned array and add all the elements to then return the final value.

Relevant Links

    JS For Loops Explained 18
*/

// FCC Intermediate Code Solution:

function sumPrimes(num) {
  // function to check if the number presented is prime
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!= i){
          // return true if it is divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}
// test here
sumPrimes(10);

/* Code Explanation:

    The function isPrime checks if a particular number is prime or not.
    If num is 1, return 0 since 1 is not a prime number.
    If num is not prime, check next number down from maximum number.
    If num is prime, add it to next number in the sequence through recursion to sumPrimes function.

Relevant Links

    Functions - Recursion 35
*/

// FCC Advanced Code Solution:

function sumPrimes(num) {
  // step 1	
  let arr = Array.from({length: num+1}, (v, k) => k).slice(2); 
  // step 2
  let onlyPrimes = arr.filter( (n) => { 
    let m = n-1;
    while (m > 1 && m >= Math.sqrt(n)) { 
      if ((n % m) === 0) 
        return false;
        m--;
    }
      return true;
  });
  // step 3
  return onlyPrimes.reduce((a,b) => a+b); 
}
// test here
sumPrimes(977);

/*Code Explanation:

    Step 1: Use Array.from() to generate a sequence of numbers up to and including num. Combine with .slice() to slice off first two indices [0, 1] since all prime numbers must be greater than 1.
    Step 2: Filter all numbers off of arr that are not prime by subjecting each element to the “trial division test” which “consists of dividing n by each integer m that is greater than 1 and less than or equal to the square root of n”. This test returns false if any number less than the element being operated on (m) produces no remainder when said element (n) is divided by it. See link below for more on this.
    Step 3: Return the sum of all remaining elements of arr using .reduce().

Relevant Links

    Trial Division Test 120
    Array.from() 48
    Array.filter() 10
*/