// Repeat a string repeat a string
/* Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Global String Object
*/

// My Solution:

function repeatStringNumTimes(str, num) {
  if (num > 0 ) {
    return str.repeat(num);
  } else {
  } return ""; 
}

repeatStringNumTimes("abc", 3);

// Basic Code Solution:

function repeatStringNumTimes(str, num) {
 if(num>0){
    return str.repeat(num);
  }
  return "";
}
/* code Explanation:
Create an empty string variable to store the repeated word.
Use a while loop or for loop to repeat code as many times as needed according to num
Then we just have to add the string to the variable created on step one, and increase or decrease num depending on how you set the loop.
At the end of the loop, return the variable for the repeated word.
*/

// Intermediate Code Solution:
function repeatStringNumTimes(str, num) {
  if(num < 0)
    return "";
  if(num === 1)
    return str;
  else
    return str + repeatStringNumTimes(str, num - 1);
}
/* Code Explanation:
This solution uses recursion.
We check if num is negative and return an empty string if true.
Then we check if it’s equal to 1 and in that case we return the string itself.
If not, we add the string to a call of our function with num being decreased by 1, which will add another str and another… until eventually num is 1. And return that whole process.
*/

// Advanced Solution:
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

repeatStringNumTimes("abc", 3);

/* Code Explanation:
This solution takes a declarative approach.
It is similar to the third solution, except it uses the ternary operator form of the if statement.
*/
