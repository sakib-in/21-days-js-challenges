const n = 5;

// 1. Print numbers from 1 to n
function print1ton(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i + " ";
  }
  console.log("1. Print 1 to n:", output);
}

print1ton(n);

// 2. Print numbers from n to 1 without changing loop condition of above question
function printnto1(n) {
  process.stdout.write("2. Print n to 1:" + " ");
  for (let i = 1; i <= n; i++) {
    const output = n - i + 1;
    process.stdout.write(output + " ");
  }
  console.log();
}

printnto1(n);

// 3. Print All Even numbers from 1 to n
function printEvennumbers(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) output += i + " ";
  }
  console.log("3. Even numbers:", output);
}

printEvennumbers(10);

// 4. Sum of First n natural numbers
function sumOfn(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("4. Sum of first n numbers:", sum);
}

sumOfn(n);

// 5. Product (Factorial) of n
function factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  console.log("5. Factorial of n:", product);
}

factorial(n);

// 6. Sum of All Even numbers up to n
function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  console.log("6. Sum of all even numbers:", sum);
}

sumOfEven(10);

// 7. Print Squares of numbers from 1 to n
function printSquares(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i * i + " ";
  }
  console.log("7. Squares:", output);
}

printSquares(n);
