//1. Split Number into Digits

function splitNumbertoDigits(n) {
  process.stdout.write(`1. ${n} After Split: `);
  let digitsArr = [];

  while (n > 0) {
    digitsArr.unshift(n % 10);
    n = Math.floor(n / 10);
  }

  console.log(digitsArr);
}

splitNumbertoDigits(12345);

//2. Remove the Decimal Point Mathematically
function removeDecimalPoint(n) {
  process.stdout.write(`2. ${n} After removing decimal points: `);

  while (n % 1 !== 0) {
    n = Number((n * 10).toFixed(10));
    //     console.log(n);
  }

  console.log(n);
}

removeDecimalPoint(12.34);

//3. Separate Whole and Fractional Parts of a Number
function separateWholeandFractionParts(n) {
  let whole = Math.floor(n);
  let fraction = Number((n - whole).toFixed(10));

  return { whole, fraction };
}

const separetedWholeandFraction = separateWholeandFractionParts(5.75);
console.log(
  `3. Whole Part = ${separetedWholeandFraction.whole} and Fraction part = ${separetedWholeandFraction.fraction}`
);

//4. Count Whole and Fractional Digits Separately
function wholeNumberCount(n) {
  let count = 0;
  while (n !== 0) {
    count++;
    n = Math.floor(n / 10);
  }
  return count;
}

function fractionDigitCount(n) {
  let count = 0;
  while (n % 1 !== 0 && count < 15) {
    n *= 10;
    count++;
  }
  return count;
}

function wholeAndFractionCount(n) {
  const { whole, fraction } = separateWholeandFractionParts(n);

  const wholeCount = wholeNumberCount(whole);
  const fractionCount = fractionDigitCount(fraction);

  console.log(
    `4. Whole Count = ${wholeCount}, Fraction Count = ${fractionCount}`
  );
}

wholeAndFractionCount(12.345);

//5. Generate a Decimal Number from Whole and Fractional Digits
function generateWholeNumber(arr) {
  const n = arr.length;
  let whole = 0;
  for (let i = 0; i < n; i++) {
    whole = 10 * whole + arr[i];
  }
  return whole;
}

function generateFraction(arr) {
  const n = arr.length;
  let whole = 0;
  let divide = 1;
  for (let i = 0; i < n; i++) {
    whole = 10 * whole + arr[i];
    divide *= 10;
  }
  return whole / divide;
}
function generateDecimalNumber(w, f) {
  let whole = generateWholeNumber(w);
  let fraction = generateFraction(f);
  console.log(`5.Decimal Number = ${whole + fraction}`);
}

const whole = [1, 2];
const fraction = [3, 4];
generateDecimalNumber(whole, fraction);
