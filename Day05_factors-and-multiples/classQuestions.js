//1. Print All Factors of a Number
function findFactors(n) {
  process.stdout.write(`All factors of ${n}: `);
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
  console.log(n);
}

findFactors(24);

//2. Print All Multiples of a Number up to N
function getMultiples(num, limit) {
  process.stdout.write(`All multiples of ${num} to ${limit}: `);
  const multiples = [];

  for (let i = num; i <= limit; i += num) {
    multiples.push(i);
  }

  console.log(multiples);
}

getMultiples(4, 30);

//3. Find the HCF (Highest Common Factor) or GCD of Two Numbers
function findHCF(num1, num2) {
  let a = Math.min(num1, num2);
  let b = Math.max(num1, num2);

  while (b !== 0) {
    let rem = a % b;
    a = b;
    b = rem;
  }

  console.log(`HCF of ${num1} and ${num2}: ${a}`);
}

findHCF(12, 18);

//4. Find the LCM (Least Common Multiple) of Two Numbers
function findLCM(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  const gcd = max;
  const lcm = Math.abs(a * b) / gcd;

  console.log(`The LCM of ${a} and ${b}: ${lcm}`);
}

findLCM(12, 18);
