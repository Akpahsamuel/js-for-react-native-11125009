Student ID: 11125009

This project contains JavaScript code for completing three assigned tasks:

Task 1: Array Manipulation

A function processArray is defined that takes an array of numbers as input.
It iterates through the array and squares even numbers and triples odd numbers.
The function returns a new array containing the processed numbers.
Task 2: String Formatting

A function formatArrayStrings is defined that takes two arrays as input:
An array of strings.
An array of numbers processed by processArray from Task 1.
It iterates through both arrays simultaneously.
If the corresponding number in the processed number array is even, the string at the same index in the string array is converted to uppercase.
If the corresponding number is odd, the string is converted to lowercase.
The function returns a new array containing the formatted strings.
Task 3: User Profile Creation

A function createUserProfiles is defined that takes two arrays as input:
An array of names.
An array of modified names (either the output of formatArrayStrings from Task 2 or a separate implementation).
It iterates through both arrays and creates an object for each user profile.
Each object contains the following properties:
originalName: The original name from the first input array.
modifiedName: The modified name from the second input array.
id: An auto-incremented ID starting from 1.
The function returns an array of user profile objects.
Files:

arrayManipulation.js: Contains the processArray and potentially formatArrayStrings functions (depending on your approach).
userInfo.js: Contains the createUserProfiles function.
Instructions:

Ensure the files are in the same directory.
Run the JavaScript code in userInfo.js or another file that imports the necessary functions.
The code will print the array of user profiles to the console.
