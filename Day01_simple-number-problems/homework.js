// 1. Print all numbers divisible by 3 and 5 up to n
function printDivisibleBy3And5(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) output += i + " ";
  }
  console.log("H1. Divisible by 3 & 5:", output);
}

printDivisibleBy3And5(30);

// 2. Find the sum of all odd numbers up to n
function sumOfOdd(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
  }
  console.log("H2. Sum of odd numbers:", sum);
}

sumOfOdd(10);

// 3. Print the cubes of numbers from 1 to n
function printCubes(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i * i * i + " ";
  }
  console.log("H3. Cubes:", output);
}

printCubes(5);

// 4. Print only the numbers that are both even and perfect squares (1 to n)
function printEvenPerfectSquares(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      output += i + " ";
    }
  }
  console.log("H4. Even perfect squares:", output.trim());
}

printEvenPerfectSquares(20);
