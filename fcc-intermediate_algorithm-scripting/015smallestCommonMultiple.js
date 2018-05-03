/* Smalest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Smallest Common Multiple
*/

// My Solution:
function smallestCommons(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);
  var rangeArr = [];
  
  for (let i = min; i<=max; i++) {
    rangeArr.push(i);
  }
  
  var lcm = rangeArr[0];
  
  for (i=1; i<rangeArr.length; i++) {
    lcm = (lcm * rangeArr[i]) / gcd(lcm, rangeArr[i]); //Formula approach to finding LCM
  }
  
  // Euclid's Algorithm to find greatest common denominator
  function gcd(a,b) {
    if (b === 0)
      return a;
    else
      return gcd(b, a%b);
  }              
  
  return lcm;
}

// FCC Basic Code Solution:

function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the
  // original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // Run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

// test here
smallestCommons([1,5]);

/*Code Explanation:

    Because of the possibility of the smallest common denominator being among the two biggest numbers, it makes sense to check those first, so sort the array.
    Create a new array to sort all the numbers, newArr.
    Use a descending for loop (var i = arr[0]; i >= arr[1]; i--) to add the numbers from the biggest to the smallest in the new array.
    Declare the variables for the quotient so we can access them outside the loop:
        the quotient that’ll be our smallest common multiple (quot)
        the loop number we’re checking (loop)
        the index of the array of numbers (n)
    Use a do while loop to check what we need while n is not the same length as the new array.
    In the do part, we are going to multiply the very first number, times the number of loops, times the second number (quot = newArr[0] * loop * newArr[1];).
    The loop part will allows us to increase the number we’re checking beyond the greatest number we have without having to change the algorithm.
    We enter a for loop that will go from n being 2 and going up by one (loop++) while it is smaller than the array with all the numbers (n < newArr.length).
    If the quotient does not divide evenly (quot % newArr[n] !== 0), then stop the loop (break;). If it is even, then check for the next elements (n++) in the array until it is not even or we find our answer.
    Outside the loop, increase the value of loop (loop++).
    At the end of the loop return the quotient (return quot;).

Note: If the array only has two elements, then the for loop never gets used and the return value is the product of said numbers.
Relevant Links

    JS Array Prototype Sort 10
    JS For Loops Explained 9
    JS Array Prototype Push 1
    JS Do While Loop 27
    String.length
*/

//FCC Intermediate Code Solution:

function smallestCommons(arr) {
    var range = [];
    for (var i = Math.max(arr[0], arr[1]); i >= Math.min(arr[0], arr[1]); i--) {
    range.push(i);
    }

    // can use reduce() in place of this block
    var lcm = range[0];
    for (i = 1; i < range.length; i++) {
    var GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
    }
    return lcm;

    function gcd(x, y) {    // Implements the Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);

/*Code Explanation:

    The first, basic solution requires over 2,000 loops to calculate the test case smallestCommons([1,13]), and over 4 million loops to calculate smallestCommons([1,25]). This solution evaluates smallestCommons([1,13]) in around 20 loops and smallestCommons([1,25]) in 40, by using a more efficient algorithm.
    Make an empty array range.
    All numbers between the given range are pushed to range using a for loop.
    The next block of code implements the Euclidean algorithm, which is used for finding smallest common multiples.

Relevant Links

    Euclidean algorithm 458
    JS Math Max 15
    JS Math Min 7
*/

// FCC Advanced Code Solution:

function smallestCommons(arr) {
    var min = Math.min.apply(null, arr);
    var max = Math.max.apply(null, arr);
    var grandLCM;

    for (var i=min; i<max; i++) {
        if(i===min){
            grandLCM = (i * (i+1))/gcd(i, i+1);
        }else{
            grandLCM = (grandLCM * (i+1))/gcd(grandLCM, i+1);
        }
    }

    return grandLCM;

    function gcd(x, y) {    // Implements The Euclidean Algorithm
    if (y === 0)
        return x;
    else
        return gcd(y, x%y);
    }
}

// test here
smallestCommons([1,5]);

/*Code Explanation:

    Get the minimum (min) and maximum (max) in the arr.
    Variable grandLCM will hold our final result.
    In a single loop, iterate from min to max-1.
    In each iteration: if first iteration, compute the lcm of current and next number in range and hold intermediate result in grandLCM else compute the lcm of previous intermediate result and next number in range.

Comparism to code at:

:rocket: Run Code 78

    Unlike the solution at the link (Run Code) above, only a single for loop is used for range iteration and computation.
    The double loop (for and .reduce()) are replaced with just one for loop. That is the only difference.

Worthy of note:

    The gcd function uses recursion. Recursion explained 100.
    Same result can be achieved with a regular loop, e.g a for loop.
    Here, in each function call in the recursion, a new execution context is created with its own variables x and y. Hence, this recursion approach is more expensive than using a regular loop.

Relevant Links

    JS Array Prototype Reduce 2
    JS Reduce Made Easy 10
*/