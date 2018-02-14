// Chunky Monkey
/* Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

// My solution:

function chunkArrayInGroups(arr, size) {
  var chunks = [];
  for (var i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i+size));
  }
  return chunks;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

// Basic FCC solution:
function chunkArrayInGroups(arr, size) {

  var temp = [];
  var result = [];

  for (var a = 0; a < arr.length; a++) {
    if (a % size !== size - 1)
      temp.push(arr[a]);
    else {
      temp.push(arr[a]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0)
    result.push(temp);
  return result;
}
/*Code Explanation:
Firstly, we create two empty arrays called temp and result, which we will eventually return.
Our for loop loops until a is equal to or more than the length of the array in our test.
Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
Next, if temp isn’t an empty array, we push it to result.
Finally, we return the value of result.
Relevant Links
Array.push()260
For Loops55
*/

// intermediate FCC solution:
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var arr2 = [];
  for (var i = 0; i < arr.length; i+=size) {
	arr2.push(arr.slice(i , i+size));
  }
  return arr2;
}
/* Code Explanation:
First, we create an empty array arr2 where we will store our ‘chunks’.
The for loop starts at zero, increments by size each time through the loop, and stops when it reaches arr.length.
Note that this for loop does not loop through arr. Instead, we are using the loop to generate numbers we can use as indices to slice the array in the right locations.
Inside our loop, we create each chunk using arr.slice(i, i+size), and add this value to arr2 with arr2.push().
Finally, we return the value of arr2.
Relevant Links
Array.push()260
Array.slice()299
For Loops55
*/

// Advanced FCC solution:
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  var i = 0;

  while (i < arr.length) {
    newArr.push(arr.slice(i, i+size));
    i += size;
  }
  return newArr;
}
chunkArrayInGroups(["a", "b", "c", "d"], 2);
/*Code Explanation:
Firstly, we create two variables. newArr is an empty array which we will push to. We also have the i variable set to zero, for use in our while loop.
Our while loop loops until i is equal to or more than the length of the array in our test.
Inside our loop, we push to the newArr array using arr.slice(i, i+size). For the first time it loops, it will look something like:
newArr.push(arr.slice(0, 0+2))
After we push to newArr, we add the variable of size onto i.
Finally, we return the value of newArr.
Relevant Links
Array.push()260
Array.slice()299
While Loops75
:rotating_light: 
*/

// Advanced FCC Solution2:
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  while (arr.length) {
    newArr.push(arr.splice(0,size));
  }
  return newArr;
}
/* Code Explanation:
Firstly, we create a variable. newArr is an empty array which we will push to.
Our while loop loops until the length of the array in our test is not 0.
Inside our loop, we push to the newArr array using arr.splice(0, size).
For each iteration of while loop, it deletes size number of elements from the front of arr and push them as an array to newArr.
Finally, we return the value of newArr.
Relevant Links
Array.push()260
Array.splice()257
While Loops75
*/