/* Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Remainder
*/

// My Solution (taken from hints because I'm weak):

function sumFibs(num) {
  var prevNum = 0;
  var currNum = 1;
  var result = 0;
  
  while (currNum <= num) {
    if (currNum % 2 !== 0) {
      result += currNum;
    }
    currNum += prevNum;
    prevNum = currNum - prevNum;
  }
  return result;
}

sumFibs(67);


// Basic Code Solution:

function sumFibs(num) {
    var prevNumber = 0;
    var currNumber = 1;
    var result = 0;
    while (currNumber <= num) {
        if (currNumber % 2 !== 0) {
            result += currNumber;
        }

        currNumber += prevNumber;
        prevNumber = currNumber - prevNumber;
    }

    return result;
}

// test here
sumFibs(4);

/* Code Explanation:

    Create a variable to keep record of the current and previous numbers along with the result that will be returned.
    Use a while loop to make sure we do not go over the number given as parameter.
    We use the modulo operand to check if the current number is odd or even. If it is even, add it to the result.
    Complete the Fibonacci circle by rotating getting the next number and swapping values after.
    Return the result.

Relevant Links

    JS while Loop
*/

//Intermediate Code Solution:

function sumFibs(num) {
  // create an array of fib numbers till num
  var arrFib = [1];
  for (var i = 1; i <=num;) {
      arrFib.push(i);
      i = arrFib[arrFib.length - 1] + arrFib[arrFib.length - 2];
  }

  // return the sum of odd numbers from the array
  var res = arrFib.reduce(function(prev, curr) {
      if (curr%2 !== 0) return prev + curr;
      else return prev;
    });

  return res;
}

// test here
sumFibs(4);

/*Code Explanation:

    Create an array of fibonacci numbers till num.
    Use reduce() method to find the sum of odd members of array.
    Return the sum.

Relevant Links

    JS Array Prototype Push 1
    JS For Loops Explained 5
    JS Array Prototype Reduce 11
*/