/* Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

    RegExp

    HTML Entities

    String.prototype.replace()
*/

// My Simple Solution:
function convertHTML(str) {
  // &colon;&rpar;
    
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;');
}

convertHTML("Dolce & Gabbana < 'boobs'");

// My more performant solution:
function convertHTML(str) {
  // &colon;&rpar;
  // create an object that maps each character key to it's HTML entity value
  var mappingObj = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '"':'&quot;',
    "'":'&apos;'
  };
  
  // return the "replaced" string using a RegExp corresponding to each key in your mappingObj
  // use a function as your param in the replace() method which takes an argument which stores
  // your object key.
  return str.replace(/[&<>"']/g, function(i) { 
    return mappingObj[i]; 
  });
}
convertHTML("Dolce & Gabbana > 'boobs'");

// FCC Basic Code Solution:

function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");

/*Code Explanation:

Explain solution here and add any relevant links
Relevant Links

    str.split()14
    arr.join()7
    switch statement15
*/

// FCC Intermediate Code Solution:

function convertHTML(str) {
//Chaining of replace method with different arguments
  str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
return str;
}

// test here
convertHTML("Dolce & Gabbana");

/*Code Explanation:

Explain solution here and add any relevant links
Relevant Links

    str.replace()12
    Regular Expressions10
*/

// FCC Advanced Code Solution:

function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  var htmlEntities = {
    '&':'&amp;',
    '<':'&lt;',
    '>':'&gt;',
    '\"':'&quot;',
    '\'':"&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str.split('').map(function(entity){
    return htmlEntities[entity] || entity;
  }).join('');
}

// test here
convertHTML("Dolce & Gabbana");


/*Code Explanation:

    Create a object to use the Lookup functionality to easily find the characters.
    Split the original string by characters and use map to check for the changed html entity or use the same one. Alternatively you could use Regex str.replace(/&|<|>|"|'/gi.
    The a function is added which is what returns the converted entity or the original one if there is no conversion. If you go the regex route then you just have to return the matched hits. return html[entity];
    Lastly we join all the characters once again.

Note that if you went the regex route then you don�t need to join anything, just make sure you return the whole operation or save it to a variable and then return it.
Relevant Links

    str.split()14
    arr.map()39
    arr.join()7
*/
