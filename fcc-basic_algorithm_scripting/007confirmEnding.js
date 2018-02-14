// Confirm the Ending
/* Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring()
*/

// My solution (for once I didn't look it up)
function confirmEnding(str, target) {
  var subStart = str.length - target.length;
  return str.substr(subStart,undefined) === target;
}

confirmEnding("Ruby Tuesday", "dog");

// Basic Code solution
function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}

// the FCC basic code solution is functionally similar to mine but doesn't require the creation/initialization of a new variable