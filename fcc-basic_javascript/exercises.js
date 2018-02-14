// JavaScript source code

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comment Your JavaScript Code ~~~~

/* this is a block Comment
* covers multiple lines 
* so you can have chunks of comments
*/


///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Declare JavaScript Variables ~~~~
/* Instructions: 
* Use the 'var' keyword to create a variable called 'myName'.
*/

// Example
var ourName;

// Define myName below this line

var myName;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Storing Values with the Assignment Operator ~~~~
/* Instructions:
* Assign the value 7 to variable a.
* Assign the contacts of a to variable b.

* Do not change code above the line
* 'a' should have a value of 7
* 'b' should have a value of 7
* 'a' should be assigned to 'b' with '='
*/

// Setup
var a;
var b = 2;
// Only change code below this line

var a = 7;
var b = a;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Initializing Variables with the Assignment Operator ~~~~
/* Instructions:
* Define a variable 'a' with 'var' and initialize it to a value of 9.
*/

// Example
var ourVar = 19;

// Only change code below this line

var a = 9;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Understanding Uninitialized Variables ~~~~
/* Instructions:
* Initialize the three variables 'a', 'b', and 'c' with '5', '10', and "I am a" respectively 
* so that they will not be 'undefined'.
*/

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Understanding Case Sensitivity in variables ~~~~
/* Instructions:
* Modify the existing declarations and assignments so their names use 'camelCase'
* Do not create any new variables.
*/

/* **** BEST PRACTICE ****
* Write variable names in Javascript in camelCase. In camelCase, multi-word variable names
* have the first word in lowercase and the first letter of each subsequent word is 
* capitalized
*/


// Declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Add Two Numbers with JavaScript ~~~~
/* Instructions:
* change the 0 so that the sum will equal 20
*/

var sum = 10 + 10;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Subtract One Number from Another with Javascript ~~~~
/* Instructions:
* Change the 0 so the difference is 12.
*/

var difference = 45 - 33;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Multiply Two Numbers with JavaScript ~~~~
/* Instructions:
* Change the 0 so that product will equal 80.
*/

var product = 8 * 10;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Divide One Number by Another with JavaScript ~~~~
/* Instructions:
* Change the 0 so that the quotient is equal to 2.
*/

var quotient = 66 / 33;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Increment a Number with Javascript ~~~~
/* Instructions:
* Change the code to use the ++ operator on myVar.
*/

var myVar = 87;

// Only change code below this line
myVar++;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Decrement a Number with Javascript ~~~~
/* Instructions:
* Change the code to use the -- operator on myVar.
*/

var myVar = 11;

// Only change code below this line
--myVar;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Create Decimal Numbers with JavaScript ~~~~
/* Instructions:
* Create a variable myDecimal and give it a decimal value with a fractional part (e.g. 5.7).
*/

var ourDecimal = 5.7;

// Only change code below this line

var myDecimal = 13.8;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Multiply Two Decimals with Javascript ~~~~
/*Instructions:
* Multiply two decimals together to get their product.
*/

var product = 2.0 * 2.5;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Divide one Decimal by Another with Javascript ~~~~
/* Instructions:
* Change the '0.0' so that 'quotient' will equal 2.2.
*/

var quotient = 4.4 / 2.0;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Finding a Remainder in Javascript ~~~~
/* Instructions: 
* Set 'remainder' equal to the remainder of 11 divided by 3 using the 'Remainder' (%) Operator
*/

var remainder = 11 % 3;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Compound Assignment With Augmented Addition ~~~~
/* Instructions:
* Convert the assignments for 'a', 'b', and 'c' to use the '+=' operator.
*/

var a = 3;
var b = 17;
var c = 21;

// Only modify code below this line

a += 12;
b += 9;
c += 7;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Compound Assignment with Augmented Subtraction ~~~~
/* Instructions:
* Convert the assignments for 'a', 'b', and 'c' to use the '-=' operator.
*/

var a = 11;
var b = 9;
var c = 3;

// Only modify code below this line

a -= 6;
b-= 15;
c -= 1;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Compound Assignment with Augmented Multiplication ~~~~
/* Instructions:
* Convert the assignments for 'a', 'b', and 'c' to use the '*=' operator.
*/

var a = 5;
var b = 12;
var c = 4.6;

// Only modify code below this line

a *= 5;
b *= b;
c *= 10;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Compound Assignment with Augmented Division ~~~~
/* Instructions:
* Convert the assignments for 'a', 'b', and 'c' to use the '/=' operator.
*/

var a = 48;
var b = 108;
var c = 33;

// Only modify code below this line

a /= 12;
b /= 4;
c c /= 11;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Convert Celsius to Fahrenheit ~~~~
/* Instructions: 
* To test your learning, you will create a solution "from scratch". 
* Place your code between the indicated lines and it will be tested against 
* multiple test cases.
*
* The algorithm to convert from Celsius to Fahrenheit is the temperature in 
* Celsius times 9/5, plus 32.
*
* You are given a variable celsius representing a temperature in Celsius. 
* Use the variable fahrenheit already defined and apply the algorithm to 
* assign it the corresponding temperature in Fahrenheit.
*
* Note
* Don't worry too much about the function and return statements as they will 
* be covered in future challenges. For now, only use operators that you have 
* already learned.
*/

function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line
  fahrenheit = celsius * (9/5) + 32;
  
  // Only change code above this line
  return fahrenheit;
}

// Change the inputs below to test your code
convertToF(30);

// output should equal 86 if successful

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Declar String Variables ~~~~
/* Instructions:
* Create two new 'string' variables: 'myFirstName' and 'myLastName' and assign 
* them the values of your firs and last name, respectively.
*/

// Example
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line

var myFirstName = "Erik";
var myLastName = "Thunberg";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Escaping Literal Quotes in Strings ~~~~
/* Instructions:
* Use 'backslashes' to assign a string to the 'myStr' variable so that if you 
* were to print it to the console, you would see:
*	
*	I am a "double quoted" string inside "double quotes".
*/

var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Quoting Strings with Single Quotes ~~~~
/* Instructions:
* Change the provided string from double to single quotes and remove the Escaping.
*/

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
// changed to:
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Escape Sequences in Strings ~~~~
/* Instructions:
* Assign the following three lines of text into the single variable 'myStr' using
* escape sequences. 
*	
*	FirstLine
*	\SecondLine\
*	ThirdLine
*
* You will need to use escape sequences to insert special characters correctly. 
* You will also need to follow the spacing as it looks above, with no spaces
* between escape equences or words.
* 
* Here is the text with the escape sequences written out.
*
* "FirstLinenewlinebackslashSecondLinebackslashcarriage-returnThirdLine"
*/

var myStr = "FirstLine\n\\SecondLine\\\rThirdLine";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Concatenating Strings with Plus operator ~~~~
/* Instructions:
* Build 'myStr' from the strings "this is the start. " and "This is the end." 
* using the + operator.
*/

// Example
var ourStr = "I come first. " + "I come second.";

// Only change code below this line

var myStr = "This is the start. " + "This is the end.";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Concatenating Strings with the plus Equals Operator ~~~~
/* Instructions:
* Build 'myStr' over several lines by concatenating these two strings:
* "This is the first sentence. " and "This is the second sentence." using the += 
* operator.
*/

// Example
var ourStr = "I come first. ";
ourStr += "I come second.";

// Only change code below this line

var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Constructing Strings with Variables ~~~~
/* Instructions:
* Set 'myName' to a string equal to your name and build 'myStr' with 'myName' between
* the strings "My name is" and " and I am swell!".
*/

// Example
var ourName = "Free Code Camp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";

// Only change code below this line
var myName = "Erik";
var myStr = "My name is " + myName + " and I am swell!";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Appending Variables to Strings ~~~~
/* Instructions:
* Set 'someAdjective' and append it to 'myStr' using the '+=' operator.
*/

// Example
var anAdjective = "awesome!";
var ourStr = "Free Code Camp is ";
ourStr += anAdjective;

// Only change code below this line

var someAdjective = "exhilerating";
var myStr = "Learning to code is ";
myStr += someAdjective;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Find the Length of a String ~~~~
/* Instructions: 
* Use the '.length' property to count the number of characters in the 'lastName' 
* variable and assign it to 'lastNameLength'.
*/ 

// Example
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;

// Setup
var lastNameLength = 0;
var lastName = "Lovelace";

// Only change code below this line.

lastNameLength = lastName.length;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Use Bracket Notation to Find the First Character in a String ~~~~
/* Instructions:
* Use bracket notation to find the first character in the 'lastName' variable and assign it to
* 'firsLeterOfLastName'.
*/

// Example
var firstLetterOfFirstName = "";
var firstName = "Ada";

firstLetterOfFirstName = firstName[0];

// Setup
var firstLetterOfLastName = "";
var lastName = "Lovelace";

// Only change code below this line
firstLetterOfLastName = lastName[0];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Understand String Immutability ~~~~
/* Instructions:
* Correct the assignments to 'myStr' to achieve the desired effect.
*/

// Setup
var myStr = "Jello World";

// Only change code below this line

myStr = "Hello World"; // Fix Me

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Use Bracket Notation to Find the Nth Character in a String ~~~~
/* Instructions:
* Let's try to set 'thirdLetterOfLastName' to equal the third letter of the 'lastName' variable
* using bracket notation.
*/

// Example
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var thirdLetterOfLastName = lastName[2];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Use Bracket Notation to Find the Last Character in a String ~~~~
/* Instructions:
* use bracket notation to find the last character in the lastName variable.
*/

// Example
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup
var lastName = "Lovelace";

// Only change code below this line.
var lastLetterOfLastName = lastName[lastName.length - 1];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Use Bracket Notation to Find the NthtoLast Character in a String ~~~~
/* Instructions:
* Use bracket notation to find the second-to-last character in the "lastName" string.
*/

// Example
var firstName = "Ada";
var thirdToLastLetterOfFirstName = firstName[firstName.length - 3];

// Setup
var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Word Banks ~~~~
/* Instructions:
* In this challenge, we provide you with a noun, a verb, an adjective and an adverb. You need 
* to form a complete sentence using words of your choice, along with the words we provide.
* 
* You will need to use the string concatenation operator + to build a new string, using the 
* provided variables: myNoun, myAdjective, myVerb, and myAdverb. You will then assign the 
* formed string to the result variable.
* 
* You will also need to account for spaces in your string, so that the final sentence has 
* spaces between all the words. The result should be a complete sentence.
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  var sentence = "The " + myNoun +" ate a very " + myAdjective + " piece of pie then it " + myVerb + " " + myAdverb + ".";  
  result = sentence;
  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Store Multiple Values in one Variable using Javascript Arrays ~~~~
/* Instructions:
* Modify the new array myArray so that it contains both a string and a number (in that order).
*/

// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = ["FreeCodeCamp" , 149];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Nest one Array within Another Array ~~~~ 
/* Instructions:
* Create a nested array called 'myArray'
*/

// Example
var ourArray = [["the universe", 42], ["everything", 101010]];

// Only change code below this line.
var myArray = [[23,16,42],["lost","codes"]];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Access Array Data with Indexes ~~~~
/* Instructions:
* Create a variable called myData and set it to equal the first value of myArray using Bracket
* notation.
*/

// Example
var ourArray = [1,2,3];
var ourData = ourArray[0]; // equals 1

// Setup
var myArray = [1,2,3];

// Only change code below this line.
var myData = myArray[0];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Modify Array Data with Indexes ~~~~
/* Instructions:
* Modify the data stred at index '0' of 'myArray' to a value of 3.
*/

// Example
var ourArray = [1,2,3];
ourArray[1] = 3; // ourArray now equals [1,3,3].

// Setup
var myArray = [1,2,3];

// Only change code below this line.
myArray[0] = 3;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Access MultiDimensional Arrays with Indexes ~~~~
/* Instructions:
* Using bracket notation select an element from myArray such that myData is equal to '8'.
*/

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Manipulate Arrays with Push ~~~~
/* Instructions:
* Push '["dog", 3]' onto the end of the 'myArray' variable.
*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]); 
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
myArray.push(["dog", 3]);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Manipulate Arrays with pop
/* Instructions:
* use the '.pop()' function to remove the last item from 'myArray', assigning the "popped" off
* value to 'removedFromMyArray'.
*/

// Example
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop(); 
// removedFromOurArray now equals 3, and ourArray now equals [1,2]

// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line.
var removedFromMyArray = myArray.pop();

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Manipulate Arrays with shift ~~~~
/* Instructions:
* Use the '.shift()' function to remove the first item from 'myArray', assigning the "shifted
* off" value to 'removedFromMyArray'.
*/

// Example
var ourArray = ["Stimpson", "J", ["cat"]];
removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Manipulate Arrays With unshift ~~~~
/* Instructions:
* Add '["Paul",35]' to the beginning of the 'myArray' variable using '.unshift()'.
*/

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul",35]);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Shopping List ~~~~
/* Instructions:
* Create a shopping list in the variable 'myList'. The list should be a multi-dimensional
* array containing several sub-arrays.
*
* Requirements:
* 	1) There should be at least 5 sub-arrays in the list
*	2) The first element in each sub-array should contain a string with the name of the item
*   3) The second element should be a nuimber representing the quantity
*/

var myList = [
    ["Chicken breast", 6],
    ["Oatmeal", 3],
    ["Milk", 1],
    ["Peanut Butter", 1],
    ["Lemons", 2]
];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Write Reusable JavaScript with Functions ~~~~
/* Instructions:
* 1) Create a function called 'reusableFunction' which prints "Hi World" to the dev console
* 2) Call the function
*/

// Example
function ourReusableFunction() {
    console.log("Heyya, World");
}

ourReusableFunction();

// Only change code below this line
function reusableFunction() {
    console.log("Hi World");
}

reusableFunction();

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Passing Values to Functions with Arguments ~~~~
/* Instructionis:
* 1) Create a function called 'functionWithArgs' that accepts two arguments and outpouts their
*    sum to the dev console.
* 2) Call the function.
*/

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5

// Only change code below this line.

function functionWithArgs(a, b) {
    console.log(a + b);
}
functionWithArgs(8, 16);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Global Scope and Functions ~~~~
/* Instructions:
* Using 'var', declare a 'global' variable 'myGlobal' outside of any function. Initialize it
* with a value of 10.
*
* Inside function 'fun1', assign '5' to 'oopsGlobal' without using the 'var' keyword.
*/

// Declare your variable here
var myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Local Scope and Functions ~~~~
/* Instructions:
* Declare a local variable 'myVar' inside 'myLocalScope'. Run the tests and then follow the
* instructions commented out in the editor.
*/

function myLocalScope() {
    'use strict';
    var myVar = "foo";

    console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log(myVar);

// Now remove the console log line to pass the test

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Global vs Local Scope in Functions ~~~~
/* Instructions:
* Add a local variable to 'myOutfit' to override the value of 'outerWear' with 'sweater'.
*/

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    var outerWear = "sweater";


    // Only change code above this line
    return outerWear;
}

myOutfit();

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Return a Value from a Function with Return ~~~~
/* Instructions:
* Create a function 'timesFive' that accepts one argument, multiplied by '5', and returns the
* new value.
*/

// Example
function minusSeven(num) {
    return num - 7;
}

// Only change code below this line
function timesFive(num) {
    return num * 5;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Assignment with a Returned Value ~~~~
/* Instructions:
* Call the 'processArg' function with an argumenet of '7' and assign its return value to  the
* variable 'processed'.
*/

// Example
var changed = 0;

function change(num) {
    return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Stand In Line ~~~~
/* Instructions:
* Write a function nextInLine which takes an array (arr) and a number (item) as arguments. Add
* the number to the end of the array, then remove the first element of array. The nextInLine
* function should then return the element that was removed.
*/

function nextInLine(arr, item) {
    // Your code here
    arr.push(item);
    return arr.shift();  // Change this line
}

// Test Setup
var testArr = [1, 2, 3, 4, 5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Understanding Boolean Values ~~~~
/* Instructions:
* Modify the 'welcomeToBoolean' function so that it returns 'true' instead of 'false' when the
* run button is clicked.
*/

function welcomeToBooleans() {

    // Only change code below this line.

    return true; // Change this line

    // Only change code above this line.
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Use Conditional Logic with If Statements ~~~~
/* Instructions:
* Create an 'if' statement inside the function to return "Yes, that was true" if the parameter
* 'wasThatTrue' is 'true' and return "No, that was false" otherwise.
*/

// Example
function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
        return "Yes, it's true";
    }
    return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

    // Only change code below this line.
    if (wasThatTrue) {
        return "Yes, that was true";
    }
    return "No, that was false";
    // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparizon with the Equality Operator ~~~~
/* Instructions:
* Add the equality operator to the indicated line so that the function will return "Equal" when
* 'val' is equivalent to '12'.
*/

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testEqual(10);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison with the Strict Equality Operator ~~~~
/* Instructions:
* Use the Strict Equaltiy operator in the if statement so that the function will return "equal"
* when 'val' is strictly equal to '7'.
*/

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

// Change this value to test
testStrict("7");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison with the Inequality Operator ~~~~
/* Instructions:
* Add the ineqaulity operator '!=' in the if statement so that the function will return "Not
* Equal" when 'va' is not equivalent to '99'.
*/

// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testNotEqual("9");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison with the Strict Inequality Operator ~~~~
/* Instructions"
* Add the strict inequality operator to the if statement so the function will return "Not Equal"
* when 'val' is not strictly equal to '17'.
*/

// Setup
function testStrictNotEqual(val) {
    // Only Change Code Below this Line

    if (val !== 17) {

        // Only Change Code Above this Line

        return "Not Equal";
    }
    return "Equal";
}

// Change this value to test
testStrictNotEqual("17");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison with the Greater Than Operator ~~~~
/* Instructions:
* Add the Greater Than operator to the indicated lines so that the return statements make sense.
*/

function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

// Change this value to test
testGreaterThan("9");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison Witrh the Greater Than or Equal to Operator ~~~~
/* Instructions:
* Add the Greater than or Equal to operator to the indicated lines so that the return
* statements make sense.
*/

function testGreaterOrEqual(val) {
    if (val >= 20) {  // Change this line
        return "20 or Over";
    }

    if (val >= 10) {  // Change this line
        return "10 or Over";
    }

    return "9 or Under";
}

// Change this value to test
testGreaterOrEqual(20);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison with the Less than Operator ~~~~
/* Instructions:
* Add the Less Than operator to the indicated lines so that the return statements make sense.
*/

function testLessThan(val) {
    if (val < 25) {  // Change this line
        return "Under 25";
    }

    if (val < 55) {  // Change this line
        return "Under 55";
    }

    return "55 or Over";
}

// Change this value to test
testLessThan(10);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparison with the Less Than or Equal to Operator ~~~~
/* Instructions:
* Add the Less than or Equal to Operator to the indiciated lines so that the return statements
* make sense.
*/

function testLessOrEqual(val) {
    if (val <= 12) {  // Change this line
        return "Smaller Than or Equal to 12";
    }

    if (val <= 24) {  // Change this line
        return "Smaller Than or Equal to 24";
    }

    return "25 or More";
}

// Change this value to test
testLessOrEqual(10);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparisons with the Logical And Operator ~~~~
/* Instructions:
* Combine the two if statements into one statement which will return "Yes" if val is less than
* or equal to 50 and greater than or equal to 25. Otherwise, will return "No".
*/

function testLogicalAnd(val) {
    // Only change code below this line

    if (val >= 25 && val <= 50) {
        return "Yes";
    }

    // Only change code above this line
    return "No";
}

// Change this value to test
testLogicalAnd(40);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Comparisons with the Logical Or Operator ~~~~
/* Instructions:
* Combine the two if statements into one statement which returns "Outside" if val is not
* between 10 and 20, inclusive. Otherwise, return "Inside".
*/

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }
  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(56);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Introducing Else Statements ~~~~
/* Instructions:
* Combine the if statements into a single if/else statement.
*/

function testElse(val) {
    var result = "";
    // Only change code below this line

    if (val > 5) {
        result = "Bigger than 5";
    } else {
        result = "5 or Smaller";
    }
    // Only change code above this line
    return result;
}

// Change this value to test
testElse(8);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Introducing Else If Statements ~~~~
/* Instructions:
* Convert the logic to use else if statements
*/

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    } else if (val < 5) {
        return "Smaller than 5";
    } else {
        return "Between 5 and 10";
    }
}

// Change this value to test
testElseIf(7);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Logical Order in If Else Statements ~~~~
/* Instructions:
* Change the order of the logic in the functions so that it will return the correct statements
* in all cases.
*/

function orderMyLogic(val) {
    if (val < 5) {
        return "Less than 5";
    } else if (val < 10) {
        return "Less than 10";
    } else {
        return "Greater than or equal to 10";
    }
}

// Change this value to test
orderMyLogic(11);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Chaining If Else Statements ~~~~
/* Instructions:
* Write chained if/else if statements to fulfill the following conditions:
*
* num < 5 - return "Tiny"
* num < 10 - return "Small"
* num < 15 - return "Medium"
* num < 20 - return "Large"
* num >= 20 - return "Huge"
*/

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else if (num >= 20) {
        return "Huge";
    }

    return "Change Me";
    // Only change code above this line
}

// Change this value to test
testSize(653456);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Golf Code ~~~~
/* Instructions:
* In the game of golf each hole has a par meaning the average number of strokes a golfer is
* expected to make in order to sink the ball in a hole to complete the play. Depending on how
* far above or below par your strokes are, there is a different nickname.
*
* Your function will be passed par and strokes arguments. Return the correct string according
* to this table which lists the strokes in order of priority; top (highest) to bottom
* (lowest):
*
* Strokes	    Return
* 1	            "Hole-in-one!"
* <= par - 2	"Eagle"
* par - 1	    "Birdie"
* par	        "Par"
* par + 1	    "Bogey"
* par + 2	    "Double Bogey"
* >= par + 3	"Go Home!"
* 
* par and strokes will always be numeric and positive.
*/

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return "Hole-in-one!";
    } else if (strokes <= par - 2) {
        return "Eagle";
    } else if (strokes == par - 1) {
        return "Birdie";
    } else if (strokes == par) {
        return "Par";
    } else if (strokes == par + 1) {
        return "Bogey";
    } else if (strokes == par + 2) {
        return "Double Bogey";
    } else if (strokes >= par + 3) {
        return "Go Home!";
    }
    return "Change Me";
    // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Selecting from Many Options with Switch Statements ~~~~
/* Instructions:
* Write a switch statement which tests val and sets answer for the following conditions:
* 1 - "alpha"
* 2 - "beta"
* 3 - "gamma"
* 4 - "delta"
*
* Here are some helpful links:
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch
*/

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = 'beta';
            break;
        case 3:
            answer = 'gamma';
            break;
        case 4:
            answer = 'delta';
            break;
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
caseInSwitch(4);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Adding a Default Option in Switch Statements ~~~~
/* Instructions:
* Write a switch statement to set answer for the following conditions:
* "a" - "apple"
* "b" - "bird"
* "c" - "cat"
* default - "stuff"
*/
function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
switchOfStuff("c");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Multiple Identical Options in Switch Statements ~~~~
/* Instructions:
* Write a switch statement to set answer for the following ranges:
* 1-3 - "Low"
* 4-6 - "Mid"
* 7-9 - "High"
*/

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "high";
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
sequentialSizes(9);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Replacing If Else Chains with Swtich ~~~~
/* Instructions:
* Change the chained if/else if statements into a switch statement.
*/

function chainToSwitch(val) {
    var answer = "";
    // Only change code below this line

    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }

    // Only change code above this line  
    return answer;
}

// Change this value to test
chainToSwitch(42);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Returning Boolean Values From Functions ~~~~
/* Instructions:
* Fix the function 'isLess' to remove the if/else statements.
*/

function isLess(a, b) {
    // Fix this code
    return a < b;
}

// Change these values to test
isLess(100, 15);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Return Early Pattern For Functions ~~~~
/* Instructions:
* Modify the function abTest so that if a or b are less than 0 the function will immediately
* exit with a value of 'undefined'.
*/

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) {
        return;
    }


    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(-2, 2);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Counting Cards ~~~~
/* Instructions:
* n the casino game Blackjack, a player can gain an advantage over the house by keeping track
* of the relative number of high and low cards remaining in the deck. This is called Card
* Counting.
* 
* Having more high cards remaining in the deck favors the player. Each card is assigned a value
* according to the table below. When the count is positive, the player should bet high. When
* the count is zero or negative, the player should bet low.
* 
* Count Change      Cards
* +1	            2, 3, 4, 5, 6
* 0	                7, 8, 9
* -1	            10, 'J', 'Q', 'K', 'A'
*
* You will write a card counting function. It will receive a card parameter and increment or
* decrement the global count variable according to the card's value (see table). The function
* will then return a string with the current count and the string "Bet" if the count is
* positive, or "Hold" if the count is zero or negative. The current count and the player's
* decision ("Bet" or "Hold") should be separated by a single space.
*
* Example Output
* "-3 Hold"
* "5 Bet"
*
* Hint
* Do NOT reset count to 0 when value is 7, 8, or 9.
*/

var count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc('J'); cc(10); cc('Q'); cc('K'); cc('A');

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Build JavaScript Objects ~~~~
/* Instructions:
* Make an object that represents a dog called 'myDog' which contains the properties "name"
* (a string), "legs", "tails" and "friends".
*
* You can set these object properties to whatever values you want, as long as "name" is a
* string, "legs" and "tails" are numbers, and "friends" is an array.
*/

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

// Only change code below this line.

var myDog = {
    "name": "Ruby Mae",
    "legs": 4,
    "tails": 1,
    "friends": ["Mamma", "Pappa", "Lena"]
};

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Access Objects Properties with the Dot Operator ~~~~
/* Instructions:
* Read in the property values of testObj using dot notation. Set the variable hatValue equal
* to the object property hat and set the variable shirtValue equal to the object property
* shirt.
*/

// Setup
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Only change code below this line

var hatValue = testObj.hat;      // Change this line
var shirtValue = testObj.shirt;    // Change this line

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Accessing Objects Properties With Bracket Notation ~~~~
/* Instructions:
* Read the values of the properties "an entree" and "the drink" of testObj using bracket
* notation and assign them to entreeValue and drinkValue respectively.
*/

// Setup
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

// Only change code below this line

var entreeValue = testObj["an entree"];   // Change this line
var drinkValue = testObj["the drink"];    // Change this line

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Accessing Objects Properties With Variables ~~~~
/* Instructions:
* Use the 'playerNumber' variable to lookup player '16' in 'testObj' using bracket notation.
*/

// Setup
var testObj = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};

// Only change code below this line;

var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Updating Object Properties ~~~~
/* Instructions:
* Update the 'myDog' object's name property. Let's change her name from "Coder" to "Happy
* Coder". You can use either dot or bracket notation.
*/

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.name = "Happy Coder";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Add New Properties to a JavaScript Object ~~~~
/* Instructions:
* Add a '"bark"' property to 'myDog' and set it to a dog sound, such as "woof". You may use
* either dot or bracket notation.
*/

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"]
};

// Only change code below this line.
myDog.bark = "Woof";

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Delete Properties from a JavaScript Object ~~~~
/* Instructions:
* Delete the '"tails"' property from 'myDog'. You may use either dot or bracket notation.
*/

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["Free Code Camp Campers"],
    "bark": "woof"
};

// Only change code below this line.
delete myDog.tails;

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Using Objects for Lookups ~~~~
/* Instructions:
* Convert the switch statement into a lookup table called 'lookup'. Use it to lookup 'val' and
* assign the associated string to the 'result' variable.
*/

// Setup
function phoneticLookup(val) {
    var result = "";

    // Only change code below this line
    var lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };
    result = lookup[val]; //You could use dot notation but it would fail the exercise.

    // Only change code above this line
    return result;
}

// Change this value to test
phoneticLookup("delta");

/*****NOTE*****
The above example is
used in what's called
JSON data structure
or JavaScript Object
Notation. */

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ aTesting Objects for Properties ~~~~
/* Instructions:
* Modify the function 'checkObj' to test 'myObj' for 'checkProp'. If the property is found,
* return that property's value. If not, return '"Not Found"'.
*/

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
    // Your Code Here
    if (myObj.hasOwnProperty(checkProp)) {
        return myObj[checkProp];
    } else {
        return "Not Found";
    }

    return "Change Me!";
}

// Test your code by modifying these values
checkObj("penci");

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Manipulating Complex Objects ~~~~
/* Instructions:
* Add a new album to the 'myMusic' array. Add 'artist' and 'title' strings, 'rease_year'
* number, and a 'formats' array of strings.
*/

var myMusic = [
    {
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CS",
            "8T",
            "LP"],
        "gold": true
    },
    // Add record here
    {
        "artist": "Beh Howard",
        "title": "Every Kingdom",
        "release_year": 2011,
        "formats": [
            "CD",
            "Digital",
            "LP"],
        "gold": false
    }
];

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Accessing Nested Objects ~~~~
/* Instructions:
* Access the myStorage object and assign the contents of the 'glove box' property to the
* 'gloveBoxContentrs' variable. Use bracket notation for properties with a space in their
* name.
*/

// Setup
var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

// Only change code below this line

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Accessing Nested Arrays ~~~~
/* Instructions:
* Retrieve the second tree from the variable 'myPlants' using object dot and array bracket
* notation.
*/

// Setup
var myPlants = [
    {
        type: "flowers",
        list: [
            "rose",
            "tulip",
            "dandelion"
        ]
    },
    {
        type: "trees",
        list: [
            "fir",
            "pine",
            "birch"
        ]
    }
];

// Only change code below this line

var secondTree = myPlants[1].list[1]; // Change this line

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Iterate With JavaScript For Loops ~~~~
/* Instructions:
* Use a 'for' loop to work to push the values 1 through 5 onto 'myArray'.
*/

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 6; i++) {
    myArray.push(i);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Iterate Odd Numbers with a For Loop ~~~~
/* Instructions:
* Push the odd numbers from 1 through 9 to myArray using a for loop.
*/

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Count Backwards with a For Loop ~~~~
/* Instructions:
* Push the odd numbers from 9 through 1 to 'myArray' using a 'for' loop.
*/

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
    ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2) {
    myArray.push(i);
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Iterate Through an Array with a For Loop ~~~~
/* Instructions:
* Declare and initialize a variable 'total' to 0. Use a 'for' loop to add the value of each
* element of the 'myArr' array to total.
*/

// Example
var ourArr = [9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
    ourTotal += ourArr[i];
}

// Setup
var myArr = [2, 3, 4, 5, 6];

// Only change code below this line
var total = 0;
for (var i = 0; i < myArr.length; i++) {
    total += myArr[i];
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Nesting For Loops ~~~~
/* Instructions:
* Modify function 'multiplyAll' so that it multiplies the product variable by eachj number in
* in the sub-arrays of 'arr'.
*/

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }
    // Only change code above this line
    return product;
}

// Modify values below to test your code
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Iterate with JavaScript While Loops ~~~~
/* Instructions:
* Push the numbers 0 through 4 to 'myArray' using a 'while' loop.
*/

// Setup
var myArray = [];

// Only change code below this line.
var i = 0;
while (i < 5) {
    myArray.push(i);
    i++;
}

///////////////////////////////////////////////////////////////////////////////////////////////
// ~~~~ Profile Lookup ~~~~
/* Instrcutions:
* We have an array of objects representing different people in our contacts lists.
*
* A lookUpProfile function that takes firstName and a property (prop) as arguments has been
* pre-written for you.
*
* The function should check if firstName is an actual contact's firstName and the given
* property (prop) is a property of that contact.
*
* If both are true, then return the "value" of that property.
*
* If firstName does not correspond to any contacts then return "No such contact"
*
* If prop does not correspond to any valid properties then return "No such property"
*/

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(firstName, prop) {
    // Only change code below this line
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === firstName) {
            if (contacts[i].hasOwnProperty(prop)) {
                return contacts[i][prop];
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
    // Only change code above this line
}

// Change these values to test your function
lookUpProfile("Sherlock", "likes");

///////////////////////////////////////////////////////////////////////////////////////////////