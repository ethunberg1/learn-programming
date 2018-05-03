/* Finders Keepers
Create a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.prototype.filter()

*/

// My Solution:
function findElement(arr, func) {
  var filteredArr = arr.filter(func);
  return filteredArr[0];
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

// FCC Basic Code Solution:

function findElement(arr, func) {
  // Make num undefined by default
  var num;

  // Loop thorugh the array and use the function to check
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      // Store the first case and break the loop
      num = arr[a];
      return num;
    }
  }

  // otherwise return undefined
  return num;
}

findElement([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});

// test here
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*Code Explanation:

    To make the code easier, create an undefined variable that will be returned.
    Loop through the array to check for each element if it satisfy the function. This is done by passing the arr[index of the loop] as the parameter for the function from the second argument.
    If true, then store the array element, and return it. This will stop the loop. No else needed.
    If the loop was not broken and it has ended, then return num which by default is undefined. This means that none of the elements from the array satisfied the function.

Relevant Links

    JS For Loops Explained 3
*/

// FCC Intermediate Code Solution:

function findElement(arr, func) {
  filterArr = arr.filter(func); //filter array with the function provided

  return filterArr[0]; //return the first element that returns true, or undefined if no elements return true
}

// test here
findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

/*
Relevant Links

    JS Array Prototype Filter 10
*/