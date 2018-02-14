// Return the Largest Numbers in Arrays

/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

Comparison Operators
*/

// Basic Code Solution

function largestOfFour(arr) {
 var results = []; // this is an array that will be populated with all of the largest values from each individual sub array
  for (var i = 0; i < arr.length; i++) { // this is your outer loop
    var largestNumber = arr[i][0]; // initializes largestNumber with the first number. Must be outside the an inner loop so it won't be reassigned until we find a larger number
    for (var sb = 1; sb < arr[i].length; sb++) { //this is your inner loop
      if (arr[i][sb] > largestNumber) { // check if the sub array is larger than the currently stored largest number. if so, then update the number in the variabe.
        largestNumber = arr[i][sb]; // This statement stores the largest number in each sub-array 
      }
    }

    results[i] = largestNumber;
  }

  return results;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Intermediate Code Solution

function largestOfFour(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

/* Code Explanation:
we map all items within the main array to a new array using Array.prototype.map() and return this array as the final result
within each inner array, we reduce its contents down to a single value using Array.prototype.reduce()
the callback function passed to the reduce method takes the previous value and the current value and compares the two values
if the current value is higher than the previous value we set it as the new previous value for comparison with the next item within the array or returns it to the map method callback if it’s the last item
Relevant Links
Array.prototype.map()91
Array.prototype.reduce()98
Ternary Operators98
*/

// Advanced Code Solution:

function largestOfFour(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

/* Code Explanation:
TL;DR: We build a special callback function (using the Function.bind method), that works just like Math.max but also has Function.prototype.apply's ability to take arrays as its arguments :smiley:

We start by mapping through the elements inside the main array. Meaning each one of the inner arrays.

Now the need a callback function to find the max of each inner array provided by the map.

So we want to create a function that does the work of Math.max and accepts input as an array (which by it doesn’t by default).

In other words, it would be really nice and simple if this worked by itself:

Math.max([9, 43, 20, 6]); // Resulting in 43

Alas, it doesn’t.

To do the work of accepting arguments in the shape of an array, there is this Function.prototype.apply method, but it complicates things a bit by invoking the context function.

i.e. Math.max.apply(null, [9, 43, 20, 6]); would invoke something like a Max.max method. What we’re looking for… almost.

Here we’re passing null as the context of the Function.prototype.apply method as Math.max doesn’t need any context.

Since arr.map expects a callback function, not just an expression, we create a function out of the previous expression by using the Function.bind method.

Since, Function.prototype.apply is a static method of the same Function object, we can call Function.prototype.bind on Function.prototype.apply i.e. Function.prototype.apply.bind.

Now we pass the context for the Function.prototype.apply.bind call (in this case we want Math.maxso we can gain its functionality).

Since the embedded Function.prototype.apply method will also require a context as it’s 1st argument, we need to pass it a bogus context.

So, we pass null as the 2nd param to Function.prototype.apply.bind which gives a context to the Math.max method.
Since, Math.max is independent of any context, hence, it ignores the bogus context given by Function.prototype.apply method call.
Thus, our Function.prototype.apply.bind(Math.max, null) makes a new function accepting the arr.map values i.e. the inner arrays.
Relevant Links
Math.max49
Function.prototype.apply on DevDocs70
Function.bind on DevDocs61
*/