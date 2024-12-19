// empty array to hold the numbers
let numbers = [];

// Function to add numbers using prompt
function addNumbers() {
    for (let i = 0; i < 10; i++) {
        let input = prompt(`Enter number ${i + 1}:`);
        if (input !== null) {
            numbers.push(Number(input)); // Push the number into the array
        }
    }
}

// Bubble Sort function
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    
    for (let i = 0; i < n - 1; i++) {
        swapped = false; // Reset swapped flag each iteration
        for (let j = 0; j < n - i - 1; j++) {
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`); // Log comparison
            
            if (arr[j] > arr[j + 1]) {
                // Swap if the element found is greater than the next element
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true; // Set swapped flag
                console.log(`Swapped ${temp} and ${arr[j + 1]}`); // Log swap
            }
        }
        // If no two elements were swapped by inner loop, then break
        if (!swapped) {
            break;
        }
    }
    return arr;
}

// Add numbers to the array using prompt
addNumbers();

// Sort the array using bubble sort
let sortedArray = bubbleSort(numbers);

// Log the sorted array
console.log("Sorted Array:", sortedArray);
