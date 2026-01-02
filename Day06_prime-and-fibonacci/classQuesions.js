//1. Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) {
    console.log(`${n} is not a Prime Number`);
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(`${n} is not a Prime Number`);
      return;
    }
  }

  console.log(`${n} is a Prime Number`);
}

isPrime(7);

//2. Check if two Numbers are Co-Prime
function checkIsCoPrime(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  if (max === 1) console.log("Numbers are Co-Prime");
  else console.log("Numbers are not Co-Prime");
}

checkIsCoPrime(7, 8);

//3.Print Fibonacci Series up to N Terms
function printFibonacci(n) {
  process.stdout.write("Fibonacci Series: ");
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    process.stdout.write(a + " ");

    let c = a + b;
    a = b;
    b = c;
  }
}

printFibonacci(10);

//4. Find the Nth Fibonacci Number
function findNthFibonacciNumber(n) {
  process.stdout.write(`${n}th Fibonacci Number: `);
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    if (i === n) console.log(a);

    let c = a + b;
    a = b;
    b = c;
  }
}

findNthFibonacciNumber(10);

//5. Check if a Number Belongs to the Fibonacci Series
function isBelongstoFibonacci(n) {
  let a = 0,
    b = 1;

  while (a <= n) {
    if (a === n) {
      console.log(`Yes, ${n} belongs to Fibonacci`);
      return;
    }

    let c = a + b;
    a = b;
    b = c;
  }

  console.log(`No, ${n} not belongs to Fibonacci`);
}

isBelongstoFibonacci(21);
