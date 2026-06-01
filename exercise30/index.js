function operation(a, b, callback) {
    return callback(a, b);
}

function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

console.log("Result of multiplication: ", operation(5, 3, multiply)); // Output: 15
console.log("Result of division: ", operation(10, 2, divide)); // Output: 5