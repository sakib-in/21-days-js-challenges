//1. Find the Sum of Digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    let rem = num % 10;
    sum += rem;
    num = Math.floor(num / 10);
  }

  console.log(`Sum of Digits = ${sum}`);
}

sumOfDigits(987);

//2. Find the Average of Digits
function averageOfDigits(num) {
  let sum = 0;
  let numArr = [];

  while (num > 0) {
    let rem = num % 10;
    numArr.push(rem);
    sum += rem;
    num = Math.floor(num / 10);
  }

  const average = sum / numArr.length;

  console.log(`Average of Digits = ${average.toFixed(2)}`);
}

averageOfDigits(4567);

//3. Find the Largest and Smallest Digit in a Number
function largestSmallestDigits(num) {
  let smallest = 9;
  let largest = 0;

  while (num > 0) {
    let rem = num % 10;
    if (rem < smallest) smallest = rem;
    if (rem > largest) largest = rem;
    num = Math.floor(num / 10);
  }

  console.log(`Smallest digit = ${smallest} and Largest Digits = ${largest}`);
}

largestSmallestDigits(9483);

//4. Check if a Number is a Strong Number
function checkStrongNum(n) {
  const num = n;
  let sum = 0;
  while (n > 0) {
    let rem = n % 10;
    let fact = 1;
    for (let i = 1; i <= rem; i++) {
      fact = fact * i;
    }
    sum += fact;
    n = Math.floor(n / 10);
  }

  if (sum === num) {
    console.log(`${num} is a Strong number`);
  } else {
    console.log(`${num} is not a Strong number`);
  }
}

checkStrongNum(145);

//5. Check if a Number is an Automorphic Number
function checkAutomorphicNum(n) {
  const copy = n;
  const sqr = n * n;
  let count = 0;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  if (sqr % Math.pow(10, count) === copy) {
    console.log(`${copy} is an Automorphic number`);
  } else {
    console.log(`${copy} is not an Automorphic number`);
  }
}

checkAutomorphicNum(25);

//6. Find the Frequency of Each Digit
function digitFrequency(num) {
  const freq = {};

  while (num > 0) {
    let digit = num % 10;

    if (freq[digit]) {
      freq[digit]++;
    } else {
      freq[digit] = 1;
    }

    num = Math.floor(num / 10);
  }

  const keys = Object.keys(freq);

  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    console.log(`${key} → ${freq[key]}`);
  }
}

digitFrequency(112233);

//7. Check if a Number is a Harshad Number
function isHarshadNumber(num) {
  let n = num;
  let digitSum = 0;

  while (n > 0) {
    let rem = n % 10;
    digitSum += rem;
    n = Math.floor(n / 10);
  }

  if (num % digitSum === 0) console.log("Harshad Number");
  else console.log("Not a Harshad Number");
}

isHarshadNumber(18);
