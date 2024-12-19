// Create an empty array to represent the stack
let groceryStack = [];

// Function to check if the stack is empty and return the top value
function peek() {
    if (groceryStack.length === 0) {
        console.log("Stack is empty.");
        return null; // Return null if the stack is empty
    } else {
        return groceryStack[groceryStack.length - 1]; // Return the top item
    }
}

// Function to add an item to the stack
function push(item) {
    groceryStack.push(item); // Add item to the stack
    console.log(`Pushed: ${item}`);
    console.log("Current Stack:", groceryStack);
}

// Function to remove the last added item from the stack
function pop() {
    const topItem = peek(); // Check the top item before popping
    if (topItem !== null) {
        const removedItem = groceryStack.pop(); // Remove the last item
        console.log(`Popped: ${removedItem}`);
        console.log("Current Stack:", groceryStack);
    }
}

// Accept five grocery items using prompt
for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter grocery item ${i + 1}:`);
    push(item); // Push each item to the stack
}

// Example usage of pop after all items are added (optional)
pop(); // Remove the last item
pop(); // Remove another item
