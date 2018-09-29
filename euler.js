// 1. Find the sum of all the multiples of 3 or 5 below 1000.

// empty array to push into
const multiples = []

//get all of the numbers (multiples of 3 or 5) to push into the empty array
for (let i=1; i < 1000; i++){
  if (i % 3 === 0 || i % 5 === 0)
  multiples.push(i)
}

//use reduce method to sum the numbers in the array
const sum = multiples.reduce((a, b) => a + b);
console.log(sum);
