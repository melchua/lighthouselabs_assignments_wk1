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

function countCharsInString(inputString) {
  // declare my variables
  var characterStats = {}; // my object to store results
  var charToCountArr = inputString.toLowerCase().split(" ").join("").split(""); // remove spaces, and split to array

  // first loop: find the character and place on stack
  charToCountArr.forEach(function(charToCount) {
    // set counter variable
    var charCount = 0;
    // second loop: compare charToCount with all chars
    charToCountArr.forEach(function(charToCompare) {
      // this if statement compares the character in the stack below with the
      // character in the same array in the current stack
      if (charToCount === charToCompare) {
        charCount++;
        // console.log(charToCountArr[charToCount], charToCountArr[charToCount]);
      }
    });
    characterStats[charToCount] = charCount;
    // console.log(characterStats);
  });

  return characterStats; // return the object
}

console.log(countCharsInString("harry potter is a putz"));