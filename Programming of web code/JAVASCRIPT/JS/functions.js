console.log("Custom Functions in Javascript");

// Base-Regular Function
function Base() {
    console.log("Hello from the Base function!");
    console.log("This is a custom function.");
    console.log("This function demonstrates the use of console.log.");
}

Base(); // Calling the Base function

// Arrow Function
const Arrow = () => {
    console.log("Hello from the Arrow function!");
    console.log("This is a custom arrow function.");
    console.log("Arrow functions provide a concise syntax.");
}

Arrow(); // Calling the Arrow function

// Parameterized Function
function Parameterized(a, b) {
    console.log(a + b)
}

Parameterized(5, 10); // Calling the Parameterized function with arguments 5 and 10

