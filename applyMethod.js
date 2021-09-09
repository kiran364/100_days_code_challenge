const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(`maximum number is ${max}`);
// expected output: 7

const min = Math.min.apply(null, numbers);

console.log(`minimum number is ${min}`);
// expected output: 2