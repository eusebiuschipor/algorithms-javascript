console.log(binarySearchWithLoops([], 2) === -1);
console.log(binarySearchWithLoops([1], 1) === 0);
console.log(binarySearchWithLoops([1], 2) === -1);
console.log(binarySearchWithLoops([1, 2, 3], 2) === 1);
console.log(binarySearchWithLoops([1, 2, 3], 3) === 2);
console.log(binarySearchWithLoops([1, 2, 3], 4) === -1);
console.log(binarySearchWithLoops([1, 2, 3, 7], 3) === 2);

console.log(binarySearchWithRecursion([], 2) === -1);
console.log(binarySearchWithRecursion([1], 1) === 0);
console.log(binarySearchWithRecursion([1], 2) === -1);
console.log(binarySearchWithRecursion([1, 2, 3], 2) === 1);
console.log(binarySearchWithRecursion([1, 2, 3], 3) === 2);
console.log(binarySearchWithRecursion([1, 2, 3], 4) === -1);
console.log(binarySearchWithRecursion([1, 2, 3, 7], 3) === 2);

console.log(binarySearchWithArraySplitting([], 2) === -1);
console.log(binarySearchWithArraySplitting([1], 1) === 0);
console.log(binarySearchWithArraySplitting([1], 2) === -1);
console.log(binarySearchWithArraySplitting([1, 2, 3], 2) === 1);
console.log(binarySearchWithArraySplitting([1, 2, 3], 3) === 2);
console.log(binarySearchWithArraySplitting([1, 2, 3], 4) === -1);
console.log(binarySearchWithArraySplitting([1, 2, 3, 7], 3) === 2);