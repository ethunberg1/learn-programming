// Title Case a Sentence
/* Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

String.prototype.split()
*/

// My solution shamelessly stolen from StackExchange:
function titleCase(str) {
  
  return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  
}

titleCase("I'm a little tea pot");


// FreeCodeCamp Basic Solution:
function titleCase(str) {
  var convertToArray = str.toLowerCase().split(" ");
  var result = convertToArray.map(function(val){
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(" ");
}

titleCase("I'm a little tea pot");
/* Explanation:
We are making entire string lowercase and then converting it into array. Then we are using map function to replace the lowercase character with uppercase. Finally, we are returning the string using join method.
*/


// FreeCodeCamp Intermediate Solution:
String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
};


function titleCase(str) {
    var newTitle = str.split(' ');
    var updatedTitle = [];
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(' ');
}

/* Code Explanation:
We are modifying the replaceAt function using prototype to facilitate the use of the program.

Split the string by white spaces, and create a variable to track the updated title. Then we use a loop to turn the first character of the word to uppercase and the rest to lowercase. by creating concatenated string composed of the whole word in lowercase with the first character replaced by it’s uppercase.

Relevant Links
JS String Prototype Split47
JS String Prototype Substr113
JS Array Prototype Join26
*/

// FreeCodeCamp Advanced Solution
function titleCase(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
}

/* Code Explanation:
The solution works by first lowercasing all the characters in the string and then only uppercasing the first character of each word.

Lowercase the whole string using str.toLowerCase().

Replace every word’s first character to uppercase using .replace.

Search for character at the beginning of each word i.e. matching any character following a space or matching the first character of the whole string, by using the following pattern.

Regex explanation:

Find all non-whitespace characters (\S)
At the beginning of string (^)
Or after any whitespace character (\s)
The g modifier searches for other such word pattern in the whole string and replaces them.

This solution works with national symbols and accented letters as illustrated by following examples
international characters: ‘бабушка курит трубку’ // -> ‘Бабушка Курит Трубку’
accented characters: ‘località àtilacol’ // -> ‘Località Àtilacol’

Relevant Links
JS Regex Resources
*/