// Create arrays using prompt with default values
let numbers = prompt("Enter numbers (24, 65, 21, 5, 9, 32, 42, 80, 57):");
let names = prompt("Enter names (Zenvo, Erica, Jordie, Alicia, Redon):");

// Convert input strings into arrays
numbers = numbers.split(",").map(Number);
names = names.split(",").map(name => name.trim());

// Merge both arrays
let mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order and log
let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted Numbers (Reverse):", sortedNumbers);

// Sort names alphabetically and log
let sortedNames = names.sort();
console.log("Sorted Names (Alphabetical):", sortedNames);