//1. Count Frequency of Each Word in a Sentence
function findFrequencyOfEachWord(sentence) {
  const obj = {};
  let word = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char !== " ") {
      word += char;
    } else {
      if (word.length > 0) {
        if (obj[word]) {
          obj[word]++;
        } else {
          obj[word] = 1;
        }

        word = "";
      }
    }
  }

  if (word.length > 0) {
    if (obj[word]) {
      obj[word]++;
    } else {
      obj[word] = 1;
    }
  }

  console.log("Frequency of Words in Sentence: ", obj);
}

findFrequencyOfEachWord("i love coding and i love javascript");

//2. Check If a String Is a Pangram
function isPangram(sentence) {
  const obj = {};
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i].toLowerCase();

    if (char >= "a" && char <= "z") {
      obj[char] = true;
    }
  }

  for (let letter in obj) {
    count++;
  }

  if (count === 26) {
    console.log("Sentence is Pangram");
  } else {
    console.log("Not a Pangram Sentence");
  }
}

isPangram("The quick brown fox jumps over the lazy dog");

//3. Remove All Duplicate Words From a Sentence
function removeDuplicateWord(sentence) {
  const obj = {};
  let word = "";
  let result = "";

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];

    if (char !== " ") {
      word += char;
    } else {
      if (word.length > 0) {
        if (!obj[word]) {
          obj[word] = true;
          result += word + " ";
        }
        word = "";
      }
    }
  }

  if (word.length > 0) {
    if (!obj[word]) {
      obj[word] = word;
      result += word;
    }
  }

  console.log(result);
}

removeDuplicateWord("this is is a test test string");

//4. Find the Longest Palindromic Substring
function isPalindrom(s) {
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

function findLongestPalindrom(str) {
  let longest = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      let sub = "";
      for (let k = i; k <= j; k++) {
        sub += str[k];
      }

      if (isPalindrom(sub)) {
        if (sub.length > longest.length) {
          longest = sub;
        }
      }
    }
  }

  console.log("Longest Palindromic Substring: ", longest);
}

findLongestPalindrom("babad");

//5. Find All Anagram Pairs in an Array of Strings
function arrAnagrams(a, b) {
  if (a.length !== b.length) return false;

  const count = {};

  for (let i = 0; i < a.length; i++) {
    const char = a[i];

    if (count[char]) {
      count[char] = count[char] + 1;
    } else {
      count[char] = 1;
    }
  }

  for (let i = 0; i < b.length; i++) {
    const char = b[i];
    if (!count[char]) return false;
    count[char]--;
  }

  return true;
}

function findAnagramPairs(arr) {
  const result = [];
  const used = {};

  for (let i = 0; i < arr.length; i++) {
    if (used[arr[i]]) continue;
    const group = [arr[i]];

    for (let j = i + 1; j < arr.length; j++) {
      if (arrAnagrams(arr[i], arr[j])) {
        group.push(arr[j]);
        used[arr[j]] = true;
      }
    }

    if (group.length > 1) {
      result.push(group);
    }
  }

  console.log(result);
}

findAnagramPairs(["cat", "tac", "act", "dog"]);

//6. Find the Longest Substring Without Repeating Characters
function findLongestSubstring(s) {
  let start = 0;
  let maxLen = 0;
  let startIndex = 0;
  const seen = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (seen[char] >= start) {
      start = seen[char] + 1;
    }

    seen[char] = end;

    if (end - start + 1 > maxLen) {
      maxLen = end - start + 1;
      startIndex = start;
    }
  }

  console.log(s.substring(startIndex, startIndex + maxLen));
}

findLongestSubstring("abcabcbb");
