//1. Find the Prime Factorization (Return as an Array)
function primeFactorization(n) {
  process.stdout.write(`Prime Factorization of ${n}: `);
  const factors = [];

  while (n % 2 === 0) {
    factors.push(2);
    n = n / 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(n)) {
    while (n % factor === 0) {
      factors.push(factor);
      n = n / factor;
    }
    factor += 2;
  }

  if (n > 2) {
    factors.push(n);
  }

  console.log(factors);
}

primeFactorization(84);

//2. Factorization in Exponent Form
function primeFactorizationInExponentForm(n) {
  process.stdout.write(`Prime Factorization of ${n} in Exponent form: `);
  const result = {};

  while (n % 2 === 0) {
    result[2] = (result[2] || 0) + 1;
    n /= 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(n)) {
    while (n % factor === 0) {
      result[factor] = (result[factor] || 0) + 1;
      n /= factor;
    }
    factor += 2;
  }

  if (n > 2) {
    result[n] = (result[n] || 0) + 1;
  }

  console.log(result);
}

primeFactorizationInExponentForm(360);

//3. Distinct Prime Factor Count
function distinctPrimeFactorCount(n) {
  process.stdout.write(`Distinct Prime Factor Count: `);
  const result = {};

  while (n % 2 === 0) {
    result[2] = (result[2] || 0) + 1;
    n /= 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(n)) {
    while (n % factor === 0) {
      result[factor] = (result[factor] || 0) + 1;
      n /= factor;
    }
    factor += 2;
  }

  if (n > 2) {
    result[n] = (result[n] || 0) + 1;
  }

  console.log(Object.keys(result).length);
}

distinctPrimeFactorCount(100);

//4. Check if a Number Is a Powerful Number
function checkPowerfulNumber(n) {
  const result = {};

  while (n % 2 === 0) {
    result[2] = (result[2] || 0) + 1;
    n /= 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(n)) {
    while (n % factor === 0) {
      result[factor] = (result[factor] || 0) + 1;
      n /= factor;
    }
    factor += 2;
  }

  if (n > 2) {
    result[n] = (result[n] || 0) + 1;
  }

  if (Math.min(...Object.values(result)) >= 2) {
    console.log("Powerful Number");
  } else {
    console.log("Not a Powerful Number");
  }
}

checkPowerfulNumber(36);
