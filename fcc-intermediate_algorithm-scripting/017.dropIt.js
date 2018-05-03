/* Drop it

Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Arguments object

    Array.prototype.shift()

    Array.prototype.slice()
*/

// My Solution:
function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0]))
      arr.shift();
  return arr;
}

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2; });

// FCC Basic Code Solution:

function dropElements(arr, func) {
  // drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;})


/*Code Explanation:

    Create a for loop to check each element.
    Then check for the function given if true then stop, otherwise remove that element.
    return the array.

Relevant Links

    For Loops 3
    More about for loops 3
*/

// FCC Intermediate Code Solution:

function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func): arr.length, arr.length);
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});


/*Code Explanation:

    Use ES6 findIndex() function to find the index of the element that passes the condition
    Slice the array from the found index until the end
    There is one edge case! if the condition is not met against any of the elements ‘findIndex’ will return -1 which messes up the input to slice(). In this case use a simple conditional operator to return false instead of -1. And the ternary operator (?:slight_smile: returns the found index of required elements when the condition is true, and the length of the array otherwise so that the return value is an empty array as is instructed.

Relevant Links

    findIndex() 34
    Conditional Operator 23
*/

// FCC Advanced Code Solution:

function dropElements(arr, func) {
  while(arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// test here
dropElements([1, 2, 3, 4], function(n) {return n >= 3;});


/*Code Explanation

    Use a while loop with Array.prototype.shift() to continue checking and dropping the first element of the array until the function returns true. It also makes sure the array is not empty first to avoid infinite loops.
    Return the filtered array.

Relevant Links

    While loops
*/