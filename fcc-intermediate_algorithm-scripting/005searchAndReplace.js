/* Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.prototype.splice()

    String.prototype.replace()

    Array.prototype.join()
*/

// My Solution:
function myReplace(str, before, after) {
  var upperAfter = after.replace(/\b\w/g, l => l.toUpperCase()); // Creates a variable that converts the replacement word to Upper case
  if (before.replace(/\b\w/g, l => l.toUpperCase()) === before) { // If statement that checks whether the before word is capitalized
    return str.replace(before, upperAfter); // executes the replacement expression with the uppercase converted target word
  }
    return str.replace(before, after); // executes the replacement expression with both words untreated
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");

// FCC Basic Code Solution
function myReplace(str, before, after) {
  // Find index where before is on string
  var index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
/* Code Explanation:

    Use indexOf() to find location of before in string.
    If first letter of before is capitalized, change first letter of after to uppercase.
    Replace before in the string with after.
    Return the new string.

Relevant Links

    JS String Prototype IndexOf15
    JS String Prototype ToUpperCase4
    JS String Prototype CharAt9
    JS String Prototype Slice20
*/

// FCC Intermediate Code Solution:
function myReplace(str, before, after) {
  var re = new RegExp(before,"gi"); //Create a regular expression object
  if(/[A-Z]/.test(before[0])){  //Check whether the first letter is uppercase or not
    after = after.charAt(0).toUpperCase()+after.slice(1); //Change the word to be capitalized
     }
  var  newStr =  str.replace(re,after); //Replace the original word with new one

 return newStr;
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
/* Code Explanation:

    In this solution, regular expression [A-Z] is used to check if character is uppercase.
    Create a new regular expression object, re.
    If first letter of before is capitalized, change the first letter of after to uppercase.
    Replace before with after in the string.
    Return the new string.

Relevant Links

    JS Regex Resources
*/

// FCC Advanced Code Solution:
function myReplace(str, before, after) {

    // create a function that will change the casing of any number of letter in parameter "target"
    // matching parameter "source"
    function applyCasing(source, target) {
        // split the source and target strings to array of letters
        var targetArr = target.split("");
        var sourceArr = source.split("");
        // iterate through all the items of sourceArr and targetArr arrays till loop hits the end of shortest array
        for (var i = 0; i < Math.min(targetArr.length, sourceArr.length); i++){
            // find out the casing of every letter from sourceArr using regular expression
            // if sourceArr[i] is upper case then convert targetArr[i] to upper case
            if (/[A-Z]/.test(sourceArr[i])) {
                targetArr[i] = targetArr[i].toUpperCase();
            }
            // if sourceArr[i] is not upper case then convert targetArr[i] to lower case
            else targetArr[i] = targetArr[i].toLowerCase();
        }
        // join modified targetArr to string and return
        return (targetArr.join(""));
    }


    // replace "before" with "after" with "before"-casing
    return str.replace(before, applyCasing(before, after));
}

// test here
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
/* Code Explanation:

    Both the before and after are passed as arguments to applyCasing().
    The function applyCasing() is used to change the case of respective characters in targetArr i.e., after in accordance with that of characters in sourceArr i.e., before.
    replace() is used to replace before with after, whose casing is same as before.

Relevant Links

    JS String Prototype Split2
    JS For Loops Explained1
    JS Math Min1
    String.length
    JS String Prototype ToLowerCase3
    JS Array Prototype Join
*/