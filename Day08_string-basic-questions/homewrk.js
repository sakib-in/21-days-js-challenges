//1.  Remove All Duplicate Characters (Keep First Occurrence)
function removeDuplicateChar(str) {
  const seen = {};
  let newStr = "";

  for (const char of str) {
    if (!seen[char]) {
      newStr += char;
      seen[char] = true;
    }
  }

  console.log("String after reomving duplicates:", newStr);
}

removeDuplicateChar("programming");

//2. Check if a String Contains Only Alphabets (No Regex)
function isAlphabetsString(str) {
  for (const char of str) {
    const ascii = char.toLowerCase().charCodeAt(0);

    if (ascii < 97 || ascii > 122) {
      console.log("False! - not alphabets string");
      return false;
    }
  }

  console.log("True! - only alphabets string");
  return true;
}

isAlphabetsString("HelloWorld123");

//3. Reverse Only the Words in a Sentence
function reverseWords(s) {
  const words = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char !== " ") {
      word += char;
    } else if (char === " ") {
      words.push(word);
      word = "";
    }
  }

  if (word) {
    words.push(word);
  }

  process.stdout.write("Sentence after reversing words: ");
  for (let i = words.length - 1; i >= 0; i--) {
    process.stdout.write(words[i] + " ");
  }
  console.log();
}

reverseWords("I love coding");

//4. Find the Longest Word in a Sentence
function findLongestWord(s) {
  const words = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char !== " ") {
      word += char;
    } else if (char === " ") {
      words.push(word);
      word = "";
    }
  }

  if (word) {
    words.push(word);
  }

  let longestWord = words[0];

  for (let i = 1; i < words.length; i++) {
    const str = words[i];

    if (str.length > longestWord.length) {
      longestWord = str;
    }
  }

  console.log("Longest Word:", longestWord);
}

findLongestWord("coding is beautiful");

//5. Count the Number of Words (Manually Without split)
function countNumberOfWords(s) {
  const words = [];
  let word = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char !== " ") {
      word += char;
    } else if (char === " ") {
      if (word !== "") {
        words.push(word);
      }
      word = "";
    }
  }

  if (word) words.push(word);

  console.log(`Number of words in Sentence: ${words.length} words`);
}

countNumberOfWords("  hi   there  world ");

//6. Find All Substrings of a String (No Built-ins)
function findAllSubstrings(s) {
  const substrings = [];

  for (let i = 0; i < s.length; i++) {
    let sub = "";
    for (let j = i; j < s.length; j++) {
      sub += s[j];
      substrings.push(sub);
    }
  }

  console.log("All Substrings:", substrings);
}

findAllSubstrings("abc");

//7. Compress a String (Basic Run-Length Encoding)
function compressString(str) {
  if (str.length === 0) return "";

  let compressedStr = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressedStr += str[i] + count;
      count = 1;
    }
  }

  console.log("Compressed String:", compressedStr);
  return compressedStr;
}

compressString("aaabbccccd");
