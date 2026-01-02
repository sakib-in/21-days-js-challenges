//1. Find the Sum of Digits of a Number Using Recursion
function sumOfDigits(n) {
  if (n === 0) {
    return 0;
  }
  return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234));

//2. Reverse a Number Using Recursion
function reverseNumber(n, rev = 0) {
  if (n === 0) return rev;
  return reverseNumber(Math.floor(n / 10), rev * 10 + (n % 10));
}

console.log(reverseNumber(123));

//3. Find the Product of Digits of a Number Using Recursion
function productOfDigit(n) {
  if (n === 0) {
    return 1;
  }
  return (n % 10) * productOfDigit(Math.floor(n / 10));
}

console.log(productOfDigit(234));

//4. Check if a Number is Palindrome Using Recursion
function isPalindrome(n) {
  const original = Math.abs(n);

  function reverse(num, rev = 0) {
    if (num === 0) {
      return rev;
    }
    return reverse(Math.floor(num / 10), rev * 10 + (num % 10));
  }

  if (original === reverse(original)) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

console.log(isPalindrome(121));

//5. Count How Many Zeros Are Present in a Number Using Recursion
function countZeros(n) {
  n = Math.abs(n);

  if (n === 0) {
    return 0;
  }

  let count = n % 10 === 0 ? 1 : 0;
  return count + countZeros(Math.floor(n / 10));
}

console.log(countZeros(102030));

//6. Print All Natural Numbers Between Two Given Numbers Using Recursion
function printNumbersBetween(start, end) {
  if (start > end) {
    return;
  }
  console.log(start);
  printNumbersBetween(start + 1, end);
}

printNumbersBetween(3, 8);

//7. Find the Sum of Even Numbers from 1 to N Using Recursion
function sumOfEvenNumbers(n) {
  if (n < 2) {
    return 0;
  }
  return n % 2 === 0 ? n + sumOfEvenNumbers(n - 2) : sumOfEvenNumbers(n - 1);
}

console.log(sumOfEvenNumbers(10));
