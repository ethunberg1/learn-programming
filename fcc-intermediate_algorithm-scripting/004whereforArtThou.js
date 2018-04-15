/* Wherefore Art Thou
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful links:

    Global Object

    Object.prototype.hasOwnProperty()

    Object.keys()
*/

// FCC Intermediate Solution (with my notes):
function whatIsInAName(collection, source) {
  // What's in a name?
  var srcKeys = Object.keys(source);
  // Only change code below this line
  return collection.filter(function (obj) { //Filter rule, creates an object to store the filtered result
    return srcKeys.every(function (key) { //function that tests whether the obj property matches the source key
      return obj.hasOwnProperty(key) && obj[key] === source[key]; // checks to see if the obj object has the key property and prints the key value pair from the source
    });
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
