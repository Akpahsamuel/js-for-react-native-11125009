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


  // Sample array of numbers
const numbers = [1, 4, 3, 6, 8, 2];

// Process the array
const processedNumbers = processArray(numbers);

console.log("Original Array:", numbers);
console.log("Processed Array:", processedNumbers);
  