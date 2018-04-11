// the goal here is to take in a string, find the unique letters and count each one
// needs to be output as an object

//  create a function that accepts a string
// then get take out all spaces, make it lower case, split string into character array
// then find character, and add count to it as an object
  // this loop will be first loop through characters one by one
    // inside the loop will be another loop on the stack that compares each of those characters
    // to one in the stack below
    // it saves all the counts
    // then once all counts are saved for the character, the loop pops off the stack
    // and the next character is compared
    // loop continues until all characters have been counted and set as key: value pairs in the object

// new requirement: add indices for each character into an array
function countCharsInString(inputString) {
  var characterStats = {};
  var charToCountArr = inputString.toLowerCase().split(" ").join("").split(""); // remove spaces, and split to array

  charToCountArr.forEach(function(charToCount) {
    var charCount = 0;
    var tempArr = [];
    charToCountArr.forEach(function(charToCompare, index) {
      if (charToCount === charToCompare) {
        charCount++;
        tempArr.push(index);
      }
    });
    characterStats[charToCount] = tempArr;
  });
  return characterStats; // return the object
}

console.log(countCharsInString("lighthouse labs"));