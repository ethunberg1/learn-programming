// Mutations
/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.indexOf()
*/

// FCC Basic Code Solution:
function mutation(arr) {
  var targetArr = arr[0].toLowerCase();
  var testArr = arr[1].toLowerCase();

  for (var i = 0; i < testArr.length; i++) {
    if (targetArr.indexOf(testArr[i]) === -1)
      return false;
  }
  return true;
}

mutation(["hello", "hello"]);