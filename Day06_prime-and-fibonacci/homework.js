//1. Print All Prime Numbers up to N
function printPrimesUptoN(n) {
  process.stdout.write(`Prime numbers up to ${n}: `);

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) process.stdout.write(i + " ");
  }
  console.log();
}

printPrimesUptoN(20);

//2. Sum of All Prime Numbers till N
function sumOfPrimesUptoN(n) {
  process.stdout.write(`Sum of Prime numbers up to ${n}: `);
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) sum += i;
  }
  console.log(sum);
}

sumOfPrimesUptoN(10);

//3. Check if Two Numbers are Twin Primes
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function checkTwinPrimes(a, b) {
  if (isPrime(a) && isPrime(b) && Math.abs(a - b) === 2) {
    console.log(`${a} and ${b} are Twin primes.`);
  } else {
    console.log(`${a} and ${b} are not Twin primes.`);
  }
}

checkTwinPrimes(3, 5);

//4. Print All Fibonacci Numbers up to a Given Limit
function printFibonacciInLimit(n) {
  process.stdout.write(`All Fibonacci Numbers up to ${n}: `);
  let a = 0,
    b = 1;

  while (a < n) {
    process.stdout.write(a + " ");
    let c = a + b;
    a = b;
    b = c;
  }
  console.log();
}

printFibonacciInLimit(100);

//5. Generate Fibonacci Numbers Within a Range
function generateFibonacciInRange(start, end) {
  process.stdout.write(`All Fibonacci Numbers within ${start} to ${end}: `);
  let a = 0,
    b = 1;

  for (let i = 1; i <= end; i++) {
    if (a > start && a < end) {
      process.stdout.write(a + " ");
    }
    let c = a + b;
    a = b;
    b = c;
  }
  console.log();
}

generateFibonacciInRange(10, 100);

//6. Find the Sum of Even Fibonacci Numbers up to N Terms
function sumOfEvenFibonacciNumber(n) {
  let a = 2,
    b = 3,
    sum = 0;

  for (let i = 2; i <= n; i++) {
    if (a % 2 === 0) {
      sum += a;
    }

    let c = a + b;
    a = b;
    b = c;
  }
  console.log(`Sum of Even Fibonacci Numbers up to ${n}: ${sum}`);
}

sumOfEvenFibonacciNumber(10);

//8. Print First N Prime Fibonacci Numbers
function printPrimeFibonacciNumbers(N) {
  let a = 0,
    b = 1;
  const primeFibs = [];

  while (primeFibs.length < N) {
    let fib = a;
    if (isPrime(fib)) {
      primeFibs.push(fib);
    }

    let c = a + b;
    a = b;
    b = c;
  }

  console.log(`First ${N} Prime Fibonacci Numbers: ${primeFibs.join(", ")}`);
}

printPrimeFibonacciNumbers(5);
