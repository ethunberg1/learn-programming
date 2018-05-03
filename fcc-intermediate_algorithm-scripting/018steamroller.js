/*Steamroller

Flatten a nested array. You must account for varying levels of nesting.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.isArray()
*/

// My Solution:

function steamrollArray(arr) {
  var flatArr = arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(steamrollArray(val)) : acc.concat(val), []);
  return flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);

// FCC Basic Code Solution:

function steamrollArray(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

// test here
steamrollArray([1, [2], [3, [[4]]]]);


/*Code Explanation:

    Create a new variable to keep flattened arrays.
    Create a function that will add non array elements to the new variable, and for the ones that are array it loops through them to get the element.
    It does that by using recursion, if the element is an array then call the function again with a layer of array deeper to check if it is an array or not. if it is not then push that non-array element to the variable that gets returned. Otherwise, keep going deeper.
    Invoke the function, the first time you will always pass it an array, so it always fall in to the isArray branch
    Return the flattened array.

Relevant Links

    Array.push() 4
    Array.forEach() 52
*/

// FCC Intermediate Code Solution:

function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

flattenArray([1, [2], [3, [[4]]]]);

/*Code Explanation:

    Use spread operator to concatenate each element of arr with an empty array
    Use Array.some() method to find out if the new array contains an array still
    If it does, use recursion call steamrollArray again, passing in the new array to repeat the process on the arrays that were deeply nested
    If it does not, return the flattened array

Relevant Links

    Array.some 172
    Array.concat 31
    Spread operator 126
    Ternary Operator (condition ? a : b) 60
*/


// FCC Advanced Code Solution:

function steamrollArray(arr) {
  return arr.toString()
    .replace(',,', ',')       // "1,2,,3" => "1,2,3"
    .split(',')               // ['1','2','3']
    .map(function(v) {
      if (v == '[object Object]') { // bring back empty objects
        return {};
      } else if (isNaN(v)) {        // if not a number (string)
        return v;
      } else {
        return parseInt(v);         // if a number in a string, convert it
      }
    });
}


/*Code Explanation:

    First we turn the array to a string, which will give us a string of numbers seperated by a comma, double comma if there was an empty array and literal object text if there was an object, which we can fix it later in our if statement.
    We replace the double comma with one, then split it back into an array.
    map through the array and fix object values and convert string numbers to regular numbers.
*/