//1. Find the Product of All Distinct Prime Factors
function productOfDistinctPrimeFactorCount(n) {
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

  let product = 1;
  for (const prime of Object.keys(result)) {
    product *= Number(prime);
  }

  console.log(`Distinct Prime Factor Count Product: ${product}`);
}

productOfDistinctPrimeFactorCount(150);

//2. Check if a Number Is a Square-Free Number
function isSquareFreeNumber(n) {
  const result = {};

  let temp = n;
  while (temp % 2 === 0) {
    result[2] = (result[2] || 0) + 1;
    temp /= 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(temp)) {
    while (temp % factor === 0) {
      result[factor] = (result[factor] || 0) + 1;
      temp /= factor;
    }
    factor += 2;
  }

  if (temp > 2) {
    result[temp] = (result[temp] || 0) + 1;
  }

  for (const key in result) {
    if (result[key] >= 2) {
      console.log("Not Square-Free Number");
      return;
    }
  }
  console.log("Square-Free Number");
}

isSquareFreeNumber(30);

//3.Check if a Number Is a Smith Number
function digitSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}

function isSmithNumber(n) {
  const result = {};
  let temp = n;

  while (temp % 2 === 0) {
    result[2] = (result[2] || 0) + 1;
    temp /= 2;
  }

  let factor = 3;
  while (factor <= Math.sqrt(temp)) {
    while (temp % factor === 0) {
      result[factor] = (result[factor] || 0) + 1;
      temp /= factor;
    }
    factor += 2;
  }

  if (temp > 2) {
    result[temp] = (result[temp] || 0) + 1;
  }

  let sum = 0;
  for (const prime of Object.keys(result)) {
    sum += Number(prime);
  }

  let primeDigitSum = 0;
  for (const prime in result) {
    const count = result[prime];
    for (let i = 0; i < count; i++) {
      primeDigitSum += digitSum(Number(prime));
    }
  }

  const numberDigitSum = digitSum(n);

  if (primeDigitSum === numberDigitSum) {
    console.log("Smith Number");
  } else {
    console.log("Not a Smith Number");
  }
}

isSmithNumber(666);

//4. Check if a Number Is an Ugly Number
function isUglyNumber(n) {
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

  for (const prime in result) {
    if (Number(prime) > 5) {
      console.log("Not Ugly Number");
      return;
    }
  }
  console.log("Ugly Number");
  return;
}

isUglyNumber(18);

//5. Check if a Number Is a Kaprekar Number
function isKaprekar(num) {
  const sq = num * num;
  const digits = sq.toString().length;

  for (let i = 1; i < digits; i++) {
    const divisor = 10 ** i;

    const left = Math.floor(sq / divisor);
    const right = sq % divisor;

    if (right > 0 && left + right === num) {
      console.log(`${num} is a Kaprekar Number`);
      return;
    }
  }

  console.log(`${num} is not a Kaprekar Number`);
}

isKaprekar(45);

//6. Check if a Number Is a Happy Number
function isHappyNumber(n) {
  let temp = n;
  while (temp !== 1 && temp !== 4) {
    let sum = 0;
    while (temp > 0) {
      let rem = temp % 10;
      sum += rem ** 2;
      temp = Math.floor(temp / 10);
    }
    temp = sum;
    // console.log(temp);
  }

  if (temp === 1) {
    console.log(`${n} is a Happy Number`);
  } else {
    console.log(`${n} is not a Happy Number`);
  }
}

isHappyNumber(19);

//8. Swap Variable without using third variable
function variableSwap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  console.log(`a = ${a}, b = ${b}`);
}

variableSwap(5, 6);
