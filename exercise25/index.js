const numbers = [ 4, 5];
const number = [ 1, 2, 3];
const spreadNumbers = [...number, ...numbers];
console.log(spreadNumbers);


function multiply(...numbers) {
    return numbers.reduce((product, num) => product * num, 1);
}

console.log(multiply(2, 3, 4));
