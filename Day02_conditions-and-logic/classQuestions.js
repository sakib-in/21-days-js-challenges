// 1. Find the Maximum of Three Numbers
function findMaxOfThree(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  } else {
    max = c;
  }
  console.log("1. Maximum of three numbers:", max);
}

findMaxOfThree(10, 20, 5);

// 2. Check if a Number is Positive, Negative, or Zero
function checkNumberType(num) {
  if (num > 0) {
    console.log("2. Number Type: Positive");
  } else if (num < 0) {
    console.log("2. Number Type: Negative");
  } else {
    console.log("2. Number Type: Zero");
  }
}

checkNumberType(-9);

// 3. Calculate Electricity Bill
function calculateElectricityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    total = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  console.log(`3. Total Electricity Bill for ${units} units = ₹${total}`);
}

calculateElectricityBill(230);

// 4. Check if a Character is a Vowel or Consonant
function checkVowelOrConsonant(ch) {
  ch = ch.toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log(`4. '${ch}' is a Vowel`);
  } else if (ch >= "a" && ch <= "z") {
    console.log(`4. '${ch}' is a Consonant`);
  } else {
    console.log("4. Not a valid alphabet character");
  }
}

checkVowelOrConsonant("e");

// 5. Check if a Year is a Leap Year
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`5. ${year} is a Leap Year`);
  } else {
    console.log(`5. ${year} is NOT a Leap Year`);
  }
}

checkLeapYear(2024);
