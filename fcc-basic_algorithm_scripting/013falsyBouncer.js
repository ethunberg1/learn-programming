// Falsy Bouncer
/* Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Boolean Objects
Array.prototype.filter()
*/

// My Solution:

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var arrElementTrue = arr.filter(Boolean);
  
  return arrElementTrue;
}

bouncer([7, "ate", "", false, 9]);

// FCC Advanced Code Solution 
function bouncer(arr) {
  return arr.filter(Boolean);
}
/* code solution:
The Array.prototype.filter method expects a function that returns a Boolean value 
which takes a single argument and returns true for truthy222 value or false for falsy value. 
Hence we pass the built-in Boolean function.
*/