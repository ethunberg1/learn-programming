/* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Comparison Operators

    Array.prototype.slice()

    Array.prototype.filter()

    Array.prototype.indexOf()

    Array.prototype.concat()
*/

//My Solution (from StackExchange)

function diffArray(arr1, arr2) {
  var arrays = [].slice.call(arguments);

  function diff(arr1, arr2) {
    return arr1.filter(function (v) {
      return !~arr2.indexOf(v);
    });
  }

  return arrays.reduce(function (accArr, curArr) { 
    return [].concat( diff(accArr, curArr), diff(curArr, accArr) )
    .filter(function (v, i, self) { return self.indexOf(v) === i; });
  });

}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
/* Explanation: 
Tilde (~) is bitwise NOT operator which returns the compliment value of the element it's acting one
That means that my algorith is searching for the stuff that is in both arrays but it's only tossing out 
the stuff that matches (after concatenating the two arguments)
*/


// Basic Code Solution (Imperative Solution):
function diffArray(arr1, arr2) {
  var newArr = [];
  
  function onlyInFirst(first, second) {
  // Looping through an array to find elements that don't exist in another array
    for (var i=0;i<first.length;i++) {
      if (second.indexOf(first[i]) === -1) {
        // Pushing the elements unique to first to newArr
        newArr.push(first[i]);
      }
    }
  }
  
  onlyInFirst(arr1, arr2);
  onlyInFirst(arr2, arr1);
  
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

//Intermediate Code Solution (Declarative Solution):
function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter(
        item => !arr1.includes(item) || !arr2.includes(item)
    )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Advanced Code Solution (Declarative Solution):
function diffArray(arr1, arr2) {
    return arr1
      .filter(el => !arr2.includes(el))
      .concat(
        arr2.filter(el => !arr1.includes(el))
      )
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);