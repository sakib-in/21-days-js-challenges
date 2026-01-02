//1. Check if a Number is a Palindrome
function isPalindrome(num) {
  const originalNumber = num;
  const digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let reveredNumber = 0;

  for (let i = 0; i < digits.length; i++) {
    reveredNumber += digits[i] * 10 ** i;
  }

  if (reveredNumber === originalNumber) {
    console.log(`${originalNumber} is a Palindrom Number`);
  } else {
    console.log(`${originalNumber} is not a Palindrom Number`);
  }
}

isPalindrome(121);

//2. Check if a Number is an Armstrong Number (also called a Narcissistic Number)
function isArmStrong(num) {
  const originalNumber = num;
  const digits = [];
  while (num > 0) {
    digits.unshift(num % 10);
    num = Math.floor(num / 10);
  }
  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    let n = digits[i];
    sum += n ** digits.length;
  }

  if (sum === originalNumber) {
    console.log(`${originalNumber} is an Armstrong Number`);
  } else {
    console.log(`${originalNumber} is not an Armstrong Number`);
  }
}

isArmStrong(153);
