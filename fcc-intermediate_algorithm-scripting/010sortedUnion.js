/*Sorted Union

Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Arguments object

    Array.prototype.reduce()
*/

// My Solution:
function uniteUnique(arr) {
  // first turn the arguments from arr into an array of arrays using Array.from() - or by using the spread operator
  // then flatten the multidimensional array into a single array using .reduce()
  var unfilteredArr = [...arguments].reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
  // finally return a new array with the duplicates filtered out. This is achieved with the Set() object and the
  // 'new' method
  return [...new Set(unfilteredArr)];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// FCC Basic Solution:
function uniteUnique(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Code Explanation:

    Create empty array finalResult to store the final result.
    Loop through the arguments object in the outer loop and store it in arrayArguments.
    The inner loop is used to loop through individual array elements.
    If the element doesn’t already exist in finalArray, add it.
    Return finalArray.

Relevant Links

    JS For Loops Explained5
    array.length3
    JS String Prototype IndexOf20
    JS Array Prototype Push
*/

// FCC Intermediate Code Solution:

function uniteUnique(arr1, arr2, arr3) {
 var newArr;
 //Convert the arguments object into an array
  var args = Array.prototype.slice.call(arguments);
  //Use reduce function to flatten the array
  newArr = args.reduce(function(arrA,arrB){
  //Apply filter to remove the duplicate elements in the array
    return arrA.concat(arrB.filter(function(i){
      return arrA.indexOf(i) === -1;
    }));
  });

   return newArr;                    
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Code Explanation:

    arguments object is converted into an array using slice().
    reduce() function is used to flatten the array i.e., for every element that is in the array (or nested arrays), extract it’s elements into one-dimensional array.
    After flattening the array, filter() is used to remove duplicate elements from newArr.

Relevant Links

    JS Array Prototype Slice12
    JS Array Prototype Reduce15
    JS Array Prototype Concat9
    JS Array Prototype Filter19
*/

// FCC Advanced Code Solution:

function uniteUnique() {
  var concatArr = [];
  var i = 0;
  while (arguments[i]){
    concatArr = concatArr.concat(arguments[i]); i++;
  }
  uniqueArray = concatArr.filter(function(item, pos) {
    return concatArr.indexOf(item) == pos;
  });
  return uniqueArray;
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Code Explanation:

    Number of arguments can change dynamically, so we don’t need to bother providing our function uniteUnique() with arguments at all.
    We use a while loop to concatenate all the arguments into one array called concatArr.
    We use filter() to remove the duplicate elements by checking the index of each element and removing same elements with different positions.
    Ordering will be preserved here.

Relevant Links

    JS While Loop
*/

// FCC Alternative Code Solution using ES2015

function uniteUnique(arr) {
  
  //make an array out of arguments and flatten it (using the spread operator)
  const args = [].concat(...arguments);
  
  // create a Set
  return [...new Set(args)];
}

// test here
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

/*Code Explanation:

    We first use concat() with an empty array [] as a starting point and the spread operator ... to create an array out of the Arguments object and to flatten it at the same time
    then we use the new ES2015 Set object to store only unique values
    (to learn more about Sets, read here152)

Relevant Links

    Array.prototype.concat9
    Arguments14
    Set73
*/