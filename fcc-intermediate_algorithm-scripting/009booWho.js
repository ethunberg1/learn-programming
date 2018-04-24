/* Boo who

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Boolean Objects
*/

// My Solution:

function booWho(bool) {
  if(typeof(bool) == typeof(true)){
    return true;
  } else {
    return false;
  }
  
}

booWho(false);

// FCC Basic Solution:
function booWho(bool) {
  return typeof bool === 'boolean';
}

// test here
booWho(null);

/* Code Explanation:
Uses the operator typeof to check if the variable is a boolean. If it is, it will return true. Otherwise, if it is any other type it will return false.
Relevant Links

    Using typeof
    typeof158
*/
