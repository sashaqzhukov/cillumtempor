const slice = Array.prototype.slice;
const originalArray = [1, 2, 3, 4, 5];
const newArray = slice.call(originalArray, 2); // Creates a shallow copy of originalArray starting from index 2
console.log(newArray); // Output: [3, 4, 5]
