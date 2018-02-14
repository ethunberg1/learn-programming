// Slsher Flick
/*Return the remaining elements of an array after chopping off n elements from the head.

The head means the beginning of the array, or the zeroth index.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.slice()
Array.prototype.splice()
*/

// My Solution:

function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);

// Basic FCC Solution:
function slasher(arr, howMany) {
  // remove the head
  arr.splice(0, howMany);
  // return the remaining or the tail
  return arr;
}
slasher([1, 2, 3], 2);
/* Code Explanation:
Code Explanation:
This solution uses the splice() function.
First argument, arr is the array to be modified.
Second argument, howMany is the number of elements to be removed starting with arr[0].
Modify the array with splice() and return it.
*/

// Intermediate FCC Solution:
function slasher(arr, howMany) {

  // Return string after the amount chopped off.
  return arr.slice(howMany);

}
/*Code Explanation:
This solution uses the slice() function.
The argument howMany is the number of elements to be removed starting with arr[0].
Modify the array with slice() and return it.
*/
