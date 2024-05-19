function processArray(arr) {
    const newArray = [];
    for (let num of arr) {
      if (num % 2 === 0) {
        newArray.push(num * num);
      } else {
        newArray.push(num * 3);
      }
    }
    return newArray;
  }

// task 2 
// An array from task two is passed on here and it corresponds to the strind array here 
// odd becomes lowercase and even becomes uppercase

 function formatArrayStrings(strArray, numArray) {
    const formattedArr = [];
    for (let i = 0; i < strArray  .length; i++) {
      if (numArray[i] % 2 === 0) {
        formattedArr.push(strArray[i].toUpperCase());
      } else {
        formattedArr.push(strArray[i].toLowerCase());
      }
    }
    return formattedArr;
  }
  
  // Sample array of strings
  const strings = ["Hello", "world", "how", "are", "you?"];
  
  // Process the original array of numbers
  const processedNumbers = processArray([1, 4, 3, 2, 5]);


  // Format the strings based on processed numbers
const formattedStrings = formatArrayStrings(strings, processedNumbers);

console.log("Original Strings:", strings);
console.log("Formatted Strings:", formattedStrings);
  