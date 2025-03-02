
function oddNumbers(l, r) {
    let oddNumbers = [];

    // Start from the first odd number in the range
    if (l % 2 === 0) {
        l++; // If `l` is even, move to the next odd number
    }

    for (let i = l; i <= r; i += 2) {
        oddNumbers.push(i);
    }

    return oddNumbers;
}

const result = oddNumbers(2, 5);
console.log(result);

export default oddNumbers;