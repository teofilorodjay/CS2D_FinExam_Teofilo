// Create sub-arrays using prompt with default values
let names = prompt("Enter the names (Genevieve, Juan, Luna, Gabriel, Elise):");
let ages = prompt("Enter the ages(24, 65, 21, 5, 9):");

// Convert input strings into arrays
let nameArray = names.split(",").map(name => name.trim());
// Convert strings to numbers
let ageArray = ages.split(",").map(Number);

// Restructure into a new multi-dimensional array
let structuredArray = nameArray.map((name, index) => [name, ageArray[index]]);

// Log each name, age pair to the console
structuredArray.forEach(entry => {
    console.log(`Name: ${entry[0]}, Age: ${entry[1]}`);
});