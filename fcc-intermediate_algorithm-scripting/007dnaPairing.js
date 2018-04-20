/* DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    Array.prototype.push()

    String.prototype.split()
*/

//My Solution:
function pairElement(str) {
  var dnaStrandArr = str.split('');
  var dnaPairArr = [];
  
  for (let i=0; i<dnaStrandArr.length; i++){
    switch (dnaStrandArr[i]) {
      case 'A':
        dnaPairArr.push(["A","T"]);
        break;
      case 'T':
        dnaPairArr.push(["T","A"]);
        break;
      case 'G':
        dnaPairArr.push(["G","C"]);
        break;
      case 'C':
        dnaPairArr.push(["C","G"]);
        break;
    }
  }
  
  return dnaPairArr;
}

pairElement("ATT");

//FCC Basic Code Solution:
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  var paired = [];

  // Function to check with strand to pair.
  var search = function(char) {
    switch (char) {
      case 'A':
        paired.push(['A', 'T']);
        break;
      case 'T':
        paired.push(['T', 'A']);
        break;
      case 'C':
        paired.push(['C', 'G']);
        break;
      case 'G':
        paired.push(['G', 'C']);
        break;
    }
  };

  // Loops through the input and pair.
  for (var i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// test here
pairElement("GCG");
/*Code Explanation:

    The program is very simple, the best solution that I have come up with is to use a switch to catch all the possible four elements. Using if statements would take too much code. You could also use Regular Expressions.
    Since we have to the original and the pair, I decided to take all four cases instead of the base two.
    Create an empty array and use the search function to push the right values to the array and return them.

Relevant Links

    Switch Statements
*/

// FCC Intermediate Code Solution:
function pairElement(str) {
  //define a map object with all pair possibilities 
  var map = {T:'A', A:'T', G:'C', C:'G'};
  //split str into a char Array
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}

// test here
pairElement("GCG");
/*Code Explanation:

    First define an object with all pair possibilities, this allows us to easily find by key or value.
    Split str into a characters array so we can use each letter to find its pair.
    Use a loop to go throw the array of characters and replace each character by an array of the pair, thus creating 2d arrays.

Relevant Links

    Bracket Notation for objects
*/