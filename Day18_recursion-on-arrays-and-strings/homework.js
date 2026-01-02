//1. Find the Length of a String Using Recursion
function stringLength(str, index = 0) {
  if (str[index] === undefined) {
    return index;
  }
  return stringLength(str, index + 1);
}

console.log(stringLength("javascript"));

//2. Count the Number of Vowels in a String Using Recursion
function countVowels(str, index = 0) {
  const vowels = "aeiouAEIOU";

  if (index === str.length) {
    return 0;
  }

  let count = vowels.includes(str[index]) ? 1 : 0;
  return count + countVowels(str, index + 1);
}

console.log(countVowels("education"));

//3. Find the First Occurrence of an Element in an Array Using Recursion
function firstOccurrence(arr, target, index = 0) {
  if (index === arr.length) {
    return -1;
  }
  if (arr[index] === target) {
    return index;
  }
  return firstOccurrence(arr, target, index + 1);
}

console.log(firstOccurrence([5, 3, 7, 3, 9], 3));

//4. Find the Last Occurrence of an Element in an Array Using Recursion
function lastOccurrence(arr, target, index = 0) {
  if (index === arr.length) {
    return -1;
  }

  const restIndex = lastOccurrence(arr, target, index + 1);

  if (restIndex !== -1) {
    return restIndex;
  }

  return arr[index] === target ? index : -1;
}

console.log(lastOccurrence([5, 3, 7, 3, 9], 3));

//5. Count How Many Times a Character Appears in a String Using Recursion
function countChar(str, char, index = 0) {
  if (index === str.length) {
    return 0;
  }

  let count = str[index] === char ? 1 : 0;
  return count + countChar(str, char, index + 1);
}

console.log(countChar("recursion", "r"));

//6. Replace All Occurrences of a Character in a String Using Recursion
function replaceChar(str, target, replacement) {
  if (str.length === 0) {
    return "";
  }

  let firstChar = str[0] === target ? replacement : str[0];
  return firstChar + replaceChar(str.slice(1), target, replacement);
}

console.log(replaceChar("banana", "a", "x"));

//7. Check if All Elements in an Array Are Even Using Recursion
function allEven(arr, index = 0) {
  if (index === arr.length) {
    return true;
  }
  if (arr[index] % 2 !== 0) {
    return false;
  }
  return allEven(arr, index + 1);
}

console.log(allEven([2, 4, 6, 8]));

//8. Find the Maximum Element in an Array Using Recursion
function findMax(arr, index = 0) {
  if (index === arr.length - 1) {
    return arr[index];
  }

  const maxInRest = findMax(arr, index + 1);
  return arr[index] > maxInRest ? arr[index] : maxInRest;
}

console.log(findMax([7, 3, 9, 2, 5]));
