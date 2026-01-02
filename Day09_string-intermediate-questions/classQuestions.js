//1. Find if One String Is a Substring of Another (Manual Method)
function findSubstring(str, target) {
  for (let i = 0; i <= str.length - target.length; i++) {
    let found = true;

    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      console.log("Target Matched");
      return;
    }
  }

  console.log("Target not Matched");
}

findSubstring("hellothere", "theres");

//2. Manual Substring Search (Without Using indexOf)
function findIndexOfSubstring(str, target) {
  for (let i = 0; i <= str.length - target.length; i++) {
    let found = true;

    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      console.log("Target Matched at Index:", i);
      return;
    }
  }

  console.log("Target not Matched");
}

findIndexOfSubstring("hello world", "wor");

//3.  Check if One String is Rotation of Another
function isRotation(str, target) {
  if (str.length !== target.length) {
    console.log("Not Rotation");
    return;
  }

  let doubled = str + str;

  for (let i = 0; i <= doubled.length - target.length; i++) {
    let found = true;

    for (let j = 0; j < target.length; j++) {
      if (doubled[i + j] !== target[j]) {
        found = false;
        break;
      }
    }

    if (found) {
      console.log("Rotation");
      return;
    }
  }

  console.log("Not Rotation");
}

isRotation("abcde", "cdeab");
