// Prompt the user for the first word, defaulting to "RACECAR"
let word1 = prompt("Enter the first word (RACECAR):") || "RACECAR";
// Prompt the user for the first word, defaulting to "RACECAR"
let word2 = prompt("Enter the second word (RECORDER):") || "RECORDER";

// Function to reverse a given string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// Function to check if the original string is a palindrome
function isPalindrome(original, reversed) {
    return original === reversed;
}

// Reverse the first word
let reversedWord1 = reverseString(word1);
// Reverse the second word
let reversedWord2 = reverseString(word2);

// Log the original and reversed words, and whether they are palindromes
console.log(`Original: ${word1}, Reversed: ${reversedWord1}, Is Palindrome: ${isPalindrome(word1, reversedWord1)}`);
console.log(`Original: ${word2}, Reversed: ${reversedWord2}, Is Palindrome: ${isPalindrome(word2, reversedWord2)}`);
