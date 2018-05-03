/*Everything Be True

Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

// My Solution:
function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(function(properties) {
    return properties[pre];
  });
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// FCC Basic Code Solution:
// Using for-in loop & hasOwnProperty

function truthCheck(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;
  // Check for each object
  for (var c in collection) {
    // If it is has property and value is truthy
    if (collection[c].hasOwnProperty(pre) && Boolean(collection[c][pre])) {
      counter++;
    }
  }
  // Outside the loop, check to see if we got true for all of them and return true or false
  return counter == collection.length;
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/* Code Explanation:

    First I create a counter to check how many cases are actually true.
    Then check for each object if the value is truthy
    Outside the loop, I check to see if the counter variable has the same value as the length of collection, if true then return true, otherwise, return false

Relevant Links

    JS Loops 11
    Object.prototype.hasOwnProperty() 43
*/

// FCC Intermediate Code Solution:
// Using Array.every()

function truthCheck(collection, pre) {
  return collection.every(function (element) {
    return element.hasOwnProperty(pre) && Boolean(element[pre]);
  });
}

// test here
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/* Code Explanation:

    Uses the native “every” method to test whether all elements in the array pass the test.
    This link will help Array.prototype.every() 221

Relevant Links

    JS Array.prototype.every() 48
    MDN Array.prototype.every() 221
*/

// FCC Advanced Code Solution:


function truthCheck(collection, pre) {
  // Is everyone being true?
  return collection.every(obj => obj[pre]);
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

/*Code Explanation:

    For every object in the collection array, check the truthiness of object’s property passed in pre parameter
    Array#every method internally checks if the value returned from the callback is truthy.
    Return true if it passes for every object. Otherwise, return false.

Relevant Links

    Array#every 86
*/