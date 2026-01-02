//1. Print All Elements of an Array Using Recursion
function printElements(arr, index = 0) {
  if (index === arr.length) return;
  console.log(arr[index]);
  printElements(arr, index + 1);
}

printElements([1, 2, 3, 4]);

//2. Find the Sum of All Elements in an Array Using Recursion
function findSumOfElements(arr, index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + findSumOfElements(arr, index + 1);
}

console.log(findSumOfElements([2, 4, 6, 8]));

//3. Check if an Array Is Sorted (Ascending) Using Recursion
function isSorted(arr, index = 0) {
  if (arr.length <= 1 || index === arr.length - 1) {
    return true;
  }
  if (arr[index] > arr[index + 1]) {
    return false;
  }
  return isSorted(arr, index + 1);
}

console.log(isSorted([1, 2, 3, 5, 4]));

//4. Reverse a String Using Recursion
function reverseString(str, index = str.length - 1) {
  if (index < 0) {
    return "";
  }
  return str[index] + reverseString(str, index - 1);
}

console.log(reverseString("hello"));

//5. Check if a String Is Palindrome Using Recursion
function isPalindrome(str, left = 0, right = str.length - 1) {
  if (left >= right) {
    return true;
  }
  if (str[left] !== str[right]) {
    return false;
  }
  if (isPalindrome(str, left + 1, right - 1)) {
    return "Palindrome";
  } else {
    return "Not Palindrome";
  }
}

console.log(isPalindrome("madam"));
