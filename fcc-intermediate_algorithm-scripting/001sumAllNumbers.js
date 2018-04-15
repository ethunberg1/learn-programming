/* Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Math.max()

    Math.min()

    Array.prototype.reduce()
	*/

// My Solution
function sumAll(arr) {
  var largestVal = Math.max(...arr);
  var smallestVal = Math.min(...arr);
  var newArr = [];
  
  for (var i=0; i<largestVal-smallestVal+1; i++) {
    newArr.push(smallestVal + i);
  }
  
  return newArr.reduce(
    function (
      accumulator,
      currentValue,
      currentIndex,
      array
    ) {
    return accumulator + currentValue;
    }
  );
}

sumAll([10, 5]);

// FCC Basic Solution:
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

sumAll([1, 4]);
/* Code explanation:

    First create a variable to store the max number between two.
    The same as before for the Smallest number.
    We create a temporary variable to add the numbers.

Since the numbers might not be always in order, using max() and min() will help organize. */

// FCC Intermediate Code Solution:
unction sumAll(arr) {
  // Buckle up everything to one!

  // Using ES6 arrow function (one-liner)
  var sortedArr = arr.sort((a,b) => a-b);
  var firstNum = arr[0];
  var lastNum = arr[1];
  // Using Arithmetic Progression summing formula

  var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
  return sum;
}
/* Code Explanation:
Code Explanation:

    Firstly, we create a variable called sortedArr which sorts it from the lowest to the highest value.
    firstNum is equal to the first number and lastNum is equal to the second number.
    Next, using the Arithmetic Progression summing formula we let sum equal (lastNum - firstNum + 1) * (firstNum + lastNum) / 2.
    Finally, we return sum.

The line var sortedArr = arr.sort((a,b) => a-b); is probably what will have you more confused. This would be the same as creating a function that returns a-b for the sort() which is the standard way to sort numbers from smallest to largest. Instead using arrow or fat arrow function, we are able to do all that in one single line thus allowing us to write less.
Relevant Links

    Array.sort()13
    Arithmetic Progression summing formula139
    ES6 arrow function76
*/

// FCC Advanced Solution
function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);
/* Code Explanation:
Code Explanation:

    Creating a variable sum to store the sum of the elements.
    Starting iteration of the loop from min element of given array and stopping when it reaches the max element.
    Using a spread operator (…arr) allows passing the actual array to the function instead of one-by-one elements.

Relevant Links

    Spread Operator284
    Using Spread Operator in Math.max()107
*/
