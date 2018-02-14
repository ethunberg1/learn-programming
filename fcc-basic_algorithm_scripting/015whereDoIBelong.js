// Where Do I Belong
/* Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Array.prototype.sort()
*/

// My spagheti code solution:

function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  
  var newArr = arr;
  newArr.push(num); 
  var sortedArr = newArr.sort(function(a, b) {return a - b;} ); 
   
  function findTheNum (value) {
    return value == num;
  }
  
  return sortedArr.findIndex(findTheNum);
}

getIndexToIns([10, 20, 30, 40, 50], 35);

// Basic Code Solution:
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return a;
  }

  return arr.length;
}

/*Code Explanation:
First I sort the array using .sort(callbackFuntion) to sort it by lowest to highest, from left to right.
Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.
Relevant Links
parseInt()94
*/

//Basic Code Solution:
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0; 
  for (i=0;i<times;i++){
    if(num>arr[i]){count++;} } // counts how many array numbers are smaller than num
    return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);

/* Code Explanation:
I do not sort the arr input array
I run a for loop counting whenever the num input is bigger than an arr input number.
This number is equivalent to what num�s position would be in a sorted array.
*/

// Another Basic Code Solution:
function getIndexToIns(arr, num) {

  arr.sort(function(a, b) {
  return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
  i++;
  }

  return i;
}

getIndexToIns([40, 60], 50);

/* Code Explanation:
Sort existing array.
Iterate through the array while checking if num is bigger.
The loop will stop when num isn�t bigger than i and return the last element checked.
*/

// fcc Intermediate Code Solution:
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b){return a-b});
  return arr.indexOf(num);
}

/*Code Explanation:
First we add the number num to the array using push() which adds it as the last element of the array.
Then we use sort() with the callback function function(a, b){return a-b} to sort the numbers in ascending order.
Lastly we return the postion or index of num in the array with the indexOf() function.
Relevant Links
push()7
sort()29
indexOf()41
*/

// fcc other Intermediate code Solution:
function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);

/* Code Explanation:
First sort the array in ascending order, this is currently done using array functions for minimal footprint.
Once the array it is sorted, we directly apply the .findIndex() where we are going to compare every element in the array until we find where num <= currNum meaning where the number we want to insert is less or equal to the current number number in the iteration.
Then we use ternary operations to check whether we got an index returned or -1. We only get -1 when the index was not found meaning when we get a false for all elements int he array, and for such case, it would mean that num should be inserted at the end of the list hence why we use arr.length.
Relevant Links
Array.findIndex()74
Arrow Functions70
Ternary Operator33
*/
