/*
Q1: Create a script with a function named lowerCaseWords that takes a
mixed array as input. The function will do the following: 
    - return a promise that is resolved or rejected
    - filter the non-strings and lower case the remaining words
*/

function lowerCaseWords(mixedArray) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(mixedArray)) {
      // keeping only strings and converting them to lower case
      const words = mixedArray
        .filter((element) => typeof element === "string")
        .map((word) => word.toLowerCase());

      resolve(words);
    } else {
      reject("Sorry! Input must be array.");
    }
  });
}


const mixedArray = ["PIZZA", 10, true, 25, false, "Wings"];
lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
