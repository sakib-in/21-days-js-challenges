//1. Find the Smallest Element Greater Than a Given Value
function findGreaterValue(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = null;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] > target) {
      result = arr[mid];
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(`The Smallest Element Greater than ${target} is: ${result}`);
}

findGreaterValue([3, 5, 8, 12, 17], 10);

//2. Find the Greatest Element Smaller Than a Given Value
function findSmallestValue(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let result = null;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      result = arr[mid];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(`The Greatest Element Smaller than ${target} is: ${result}`);
}

findSmallestValue([3, 5, 8, 12, 17], 10);

//3. Check If a Number Is a Perfect Square Using Binary Search
function isPerfectSquare(n) {
  if (n < 0) return false;
  if (n === 0 || n === 1) return true;

  let left = 1;
  let right = n;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let square = mid * mid;

    if (square === n) {
      console.log(`${n} is a Perfect Square`);
      return;
    } else if (square < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(`${n} is not a Perfect Square`);
}

isPerfectSquare(36);

//4. Find the Peak Element in a Mountain Array (Binary Search Variant)
function findPeakElement(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log(`Peak element = ${arr[left]} at index ${left}`);
}

findPeakElement([1, 3, 5, 7, 6, 4, 2]);

//5.  Binary Search in a Descending Sorted Array
function binarySearchDescending(arr, target) {
  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      console.log(`${target} found at index: ${mid}`);
      return;
    } else if (arr[mid] < target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  console.log(`${target} not found in given array`);
}

binarySearchDescending([100, 90, 70, 40, 10], 70);

//6. Count How Many Times an Element Appears (Using Binary Search Twice)
function countElementAppears(arr, target) {
  function findFirst() {
    let left = 0,
      right = arr.length - 1,
      pos = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        pos = mid;
        right = mid - 1;
      } else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return pos;
  }

  function findLast() {
    let left = 0,
      right = arr.length - 1,
      pos = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === target) {
        pos = mid;
        left = mid + 1;
      } else if (arr[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
    return pos;
  }

  const first = findFirst();
  const last = findLast();

  if (first === -1) {
    console.log(`0 times ${target} found`);
  } else {
    console.log(`${last - first + 1} times ${target} found`);
  }
}

countElementAppears([1, 2, 2, 2, 3, 4], 2);

//7. Search for a Character in a Sorted String Using Binary Search
function searchForChar(str, char) {
  let left = 0,
    right = str.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (str[mid] === char) {
      console.log(`${char} found at index ${mid}`);
      return;
    } else if (str[mid] < char) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  console.log(`${char} not found`);
}

searchForChar("aabbccddeefg", "e");

//8. Find the Index Where an Element Should Be Inserted (Lower Bound)
function lowerBound(arr, element) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < element) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  console.log(`Insert at index ${left}`);
}

lowerBound([1, 3, 5, 7], 2);
