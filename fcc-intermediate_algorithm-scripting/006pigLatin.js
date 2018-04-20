/* Pig Latin
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.prototype.indexOf()

    Array.prototype.push()

    Array.prototype.join()

    String.prototype.substr()

    String.prototype.split()
*/

// My Solution:
function translatePigLatin(str) {
  var regexp = /[aeiou]/gi;
  var pigLatin = '';
  
  if (str[0].match(regexp)) {
    pigLatin = str+'way';
    } else {
      let vowelIndex = str.indexOf(str.match(regexp)[0]); //Finds the index corresponding to the first consonant in the string
      pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay'; // builds the result using a combination of substrings
    }
  
  return pigLatin;
}

translatePigLatin("Paaaaa");

// FCC Basic Solution (pretty much same as mine):
function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'way';

  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}

// test here
translatePigLatin("consonant");
/*Code Explanation:

    Make an empty string to hold your Pig Latin word.
    Assign your appropriate regular expression to a variable.
    If the first character is a vowel, just add way to end of string and return it.
    If the first character is not a vowel:
        Find number of consonants before first vowel with help of indexOf(), match() and regex.
        Start Pig Latin string with first vowel till the end.
        Add letters before first vowel to end of string.
        substr() is used for string manipulation here.
        Add ay to end of string and return it.

Relevant Links

    JS Regex Resources
    JS String Prototype IndexOf15
    JS String Prototype Substr19
*/

// FCC Intermediate Code Solution:
function translatePigLatin(str) {
  function check(obj) {
      return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
  }

  return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
}

// test here
translatePigLatin("consonant");
/*Code Explanation:

    This is a declarative as well as recursive approach to this problem.
    check() is a function which checks for first letter of string to be in the array of vowels, ['a','i','u','e','o'].
    In case of consonants, check() calls itself on the next characters until finding the first vowel.
    It’ll return the index of whatever it finds to be the last initial consonant i.e., Schmidtsville’s would be 3.
    Then, letters up until that index are removed from the string and concatenated with either that same chunk of removed string or w accordingly, and then ay regardless.

Relevant Links

    JS String Prototype CharAt10
    JS String Prototype Concat5
*/

// FCC Advanced Code Solution:
function translatePigLatin(str) {
    var strArr = [];
    var tmpChar;

    // check if the char is consonant using RegEx
    function isConsonant(char) {
        return !/[aeiou]/.test(char);
    }

    // return initial str + "way" if it starts with vowel
    // if not - convert str to array
    if (!isConsonant(str.charAt(0)))
        return str + "way";
    else
        strArr = str.split("");

    // push all consonats to the end of the array
    while (isConsonant(strArr[0])) {
        tmpChar = strArr.shift();
        strArr.push(tmpChar);
    }
 // convert array to string and concatenate "ay" at the end  
 return strArr.join("")+"ay";
}

// test here
translatePigLatin("consonant");
/* Code Explanation:

    isConsonant() is used to check if a character is a consonant.
    If first character is vowel, add way to end of string and return it.
    If first character is not a vowel:
        Split string into array using split().
        Push all consonants to end of array with help of shift() and push().
        Convert array to string using join() and add ay to end of string. Return it.

Relevant Links

    JS String Prototype Split4
    JS Array Prototype Shift12
    JS Array Prototype Push2
    JS Array Prototype Join1
*/

// FCC Advanced Solution 2:
function translatePigLatin(str) {
  return str
    .replace(/^([aeiouy])(.*)/, '$1$2way')
    .replace(/^([^aeiouy]+)(.*)/, '$2$1ay');
}

// test here
translatePigLatin("consonant");
/* Code Explanation:

    The first .replace() works only if the string begins with a vowel, in that case it adds way at the end of the string.
    The second .replace() works only if the string begins with one or more consonants, in that case it moves them at the end of the string and adds ay at the end of it.
	(This is what my notebook design is more aligned with)

Relevant Links

    JS Regex Resources
*/