//1. Reverse a String (Manual Method Only)
function reverseString(str) {
  let reverseStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }

  console.log("Reverse String:", reverseStr);
}

reverseString("javascript");

//2. Check if a String is a Palindrome
function isPalindromeString(str) {
  let left = 0,
    right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      console.log("Not a Palindrome String");
      return null;
    }
    left++;
    right--;
  }

  console.log("Palindrome String");
}

isPalindromeString("racecar");

//3. Count Frequency of Each Character
function countFrequency(str) {
  const freq = {};

  for (const char of str) {
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }

  console.log("Frequency:", freq);
}

countFrequency("banana");

//4. Find the Most Frequent Character in a String
function mostFrequentChar(str) {
  const freq = {};
  let mostFreq = 0,
    mostFreqChar = "";

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;

    if (freq[char] > mostFreq) {
      mostFreq = freq[char];
      mostFreqChar = char;
    }
  }

  console.log(`Most Frequent: ${mostFreqChar} (${mostFreq} times)`);
}

mostFrequentChar("success");

//5. Check if Two Strings Are Anagrams (Without Sorting)
function checkAnagramsStrings(a, b) {
  if (a.length !== b.length) {
    console.log("Not Anagram Strings");
    return null;
  }

  const freq = {};

  for (const char of a) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of b) {
    if (!freq[char]) {
      console.log("Not Anagram Strings");
      return null;
    }
    freq[char]--;
  }

  console.log("Anagram Strings");
}

checkAnagramsStrings("listen", "silent");

//6. Find the First Non-Repeating Character
function firstNonReaptingChar(str) {
  let freq = {};

  for (const char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }

  for (const char of str) {
    if (freq[char] === 1) {
      console.log("First non-reapting charater:", char);
      return null;
    }
  }
  console.log("No non-reapting character in String");
  return null;
}

firstNonReaptingChar("aabbcddeff");
