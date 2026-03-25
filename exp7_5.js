
let numbers = [1, 2, 3, 4, 5];

// map
let doubled = numbers.map(n => n * 2);
console.log(doubled);

// filter
let even = numbers.filter(n => n % 2 === 0);
console.log(even);

// reduce
let sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);