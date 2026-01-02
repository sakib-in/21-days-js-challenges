//1. Print Numbers from 1 to N Using Recursion
function printNNumbers(n) {
  if (n > 1) printNNumbers(n - 1);
  console.log(n);
}

printNNumbers(5);

//2. Print Numbers from N to 1 Using Recursion
function printNReverseNumbers(n) {
  console.log(n);
  if (n > 1) printNReverseNumbers(n - 1);
}

printNReverseNumbers(5);

//3. Find Factorial of a Number Using Recursion
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5));

//4. Find the Sum of First N Natural Numbers Using Recursion
function findSum(n) {
  if (n === 0) return 0;
  return n + findSum(n - 1);
}

console.log(findSum(4));

//5. Calculate Power Using Recursion
function calculatePower(a, n) {
  if (n === 0) return 1;
  return a * calculatePower(a, n - 1);
}

console.log(calculatePower(2, 5));
