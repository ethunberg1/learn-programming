/* Missing Letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    String.prototype.charCodeAt()

    String.fromCharCode()
*/

// My Solution
function fearNotLetter(str) {
  var strCodesArr = [];
  var allCodesArr = [];
  
  //populate array of character codes from your argument
  for (let i=0; i<str.length; i++) { 
    strCodesArr.push(str.charCodeAt(i));
  }
  
  //populate array of character codes based on the largest and smallest value of your string.
  for (let i=Math.min(...strCodesArr); i<=Math.max(...strCodesArr); i++) { 
    allCodesArr.push(i);                                                   
  }
  
  //filter your possible codes against your string codes arrays
   for(var j = 0; j < allCodesArr.length; j++) {

      // look for same thing in new array, convert the char code into a letter and return the result
      if (strCodesArr.indexOf(allCodesArr[j]) == -1)
         return String.fromCharCode(allCodesArr[j]);
   }
  //return undefined if both arrays match 
  return undefined;
}

fearNotLetter("abcdefg");

// FCC Basic Solution:
function fearNotLetter(str) {

  for(var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
    hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {

      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }  
  }
  return undefined;
}

// test here
fearNotLetter("abce");
/*Code Explanation:

    This solutions makes use of a for loop.
    Code of encountered character is stored in code.
    It is checked if code of current character is the expected one (no characters are skipped) by using the logic - code of current character = code of first character + number of iterations.
    If a character is missing, the missing character is found and the final string is returned.
    undefined is returned if there is no missing character in the string.

Relevant Links

    JS For Loops Explained3
    String.length
*/

// FCC Intermediate Code Solution:
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  var compare = str.charCodeAt(0), missing;

  str.split('').map(function(letter,index) {
    if (str.charCodeAt(index) == compare) {
      ++compare;
    } else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}

// test here
fearNotLetter("abce");
/*Code Explanation:

    First we define variables to store the character code for the first letter in the string, and to store whatever missing letters we may find.
    We turn the string to an array in order to map through it instead of using for and while loops.
    As we map through our letters’ character codes, we go comparing with the one that should be in that position.
    If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
    If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
    If there are no missing characters, return undefined.

Relevant Links

    JS String Prototype Split1
    JS Array Prototype Map17
*/

// FCC Advanced Code Solution:
function fearNotLetter(str) {
  var allChars = '';
  var notChars = new RegExp('[^'+str+']','g');

  for (var i = 0; allChars[allChars.length-1] !== str[str.length-1] ; i++)
    allChars += String.fromCharCode(str[0].charCodeAt(0) + i);

  return allChars.match(notChars) ? allChars.match(notChars).join('') : undefined;
}

// test here
fearNotLetter("abce");
/*Code Explanation:

    A new string allChars is created.
    Create a regular expression notChars which selects everything except str.
    The for loop is used to add all the letters in the range to allChars.
    match() is used to strip off the str letters from the newly created string and it is returned.
    If there are no missing characters, return undefined.

Relevant Links

    JS Regex Resources
    JS Ternary9
    JS String Prototype Match3
    JS Array Prototype Join
*/