//1. Count the Total Number of Factors of a Number
function factorsCount(n) {
  let count = 1;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  console.log(`Numbers of Factors of ${n}: ${count}`);
}

factorsCount(24);

//2. Sum of All Factors of a Number
function sumOfFactors(n) {
  let sum = n;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log(`Sum of Factors of ${n}: ${sum}`);
}

sumOfFactors(12);

//3. Find the Greatest Factor of a Number (Other Than Itself)
function greatestFactor(n) {
  console.log(`Greatest Factors of ${n}: ${Math.floor(n / 2)}`);
}

greatestFactor(36);

//4. Check if a Number is a Perfect Number
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum === n) {
    console.log(`${n} is a Parfect Number`);
  } else {
    console.log(`${n} is not a Perfect Number`);
  }
}

isPerfectNumber(28);

//5. Find the HCF and LCM of Three Numbers
function calculateGCD(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  return max;
}

function calculateLCM(a, b) {
  return Math.abs(a * b) / calculateGCD(a, b);
}

function findLCMAndHCF(a, b, c) {
  const gcd = calculateGCD(calculateGCD(a, b), c);
  const lcm = calculateLCM(calculateLCM(a, b), c);

  console.log(`The HCF of ${a}, ${b}, and ${c}: ${gcd}`);
  console.log(`The LCM of ${a}, ${b}, and ${c}: ${lcm}`);
}

findLCMAndHCF(8, 12, 16);
