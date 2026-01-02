//1. Sort an Array of Objects by Age (Ascending)
function sortArrayByAge(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].age > arr[j + 1].age) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }

  console.log("Sorted Array by Age:", arr);
  return arr;
}

const users = [
  { name: "A", age: 25 },
  { name: "B", age: 20 },
  { name: "C", age: 30 },
];
sortArrayByAge(users);

//2. Sort an Array but Keep Zeros at the End (Zeros Fixed)
function sortArryKeepZerosAtEnd(arr) {
  const nonZero = [];
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCount++;
    } else {
      nonZero.push(arr[i]);
    }
  }

  for (let i = 0; i < nonZero.length; i++) {
    let isSorted = false;
    for (let j = 0; j < nonZero.length - 1 - i; j++) {
      if (nonZero[j] > nonZero[j + 1]) {
        let temp = nonZero[j];
        nonZero[j] = nonZero[j + 1];
        nonZero[j + 1] = temp;
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }

  for (let i = 0; i < zeroCount; i++) {
    nonZero.push(0);
  }

  console.log("Sorted Array by keeping zeros at end:", nonZero);
}

sortArryKeepZerosAtEnd([3, 0, 5, 0, 2, 1]);

//3. Sort an Array and Track How Many Comparisons Were Made
function sortArrayWithComparisons(arr) {
  let comparisons = 0;

  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      comparisons++;

      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;
  }

  console.log("Sorted Array:", arr);
  console.log("Total Comparisons:", comparisons);

  return { sortedArray: arr, comparisons };
}

sortArrayWithComparisons([5, 1, 4, 2, 8]);

//4. Sort an Array of Characters Case-Insensitive
function sortArrayOfCharacters(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }

  console.log("Sorted array of characters:", arr);
}

sortArrayOfCharacters(["b", "A", "d", "C"]);

//5. Sort a 2D Array by the First Element of Each Subarray
function sort2DArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][0] > arr[j + 1][0]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log("Sorted 2D Array:", arr);
}

sort2DArray([
  [3, "c"],
  [1, "a"],
  [2, "b"],
]);

//6. Sort an Array in Ascending Order but Stop After K Passes
function sortArrayUntilK(arr, k) {
  for (let i = 0; i < k; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  console.log("Sorted array after k passes:", arr);
}

sortArrayUntilK([5, 4, 3, 2, 1], 2);

//7. Sort Only the Even Numbers in an Array (Odd Numbers Stay in Place)
function sortOnlyEvenNum(arr) {
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    }
  }

  even.sort((a, b) => a - b);

  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      arr[i] = even[idx];
      idx++;
    }
  }

  console.log("Only even number sorted array:", arr);
}

sortOnlyEvenNum([9, 4, 2, 7, 6, 5]);

//8. Sort an Array of Strings by Length (Shortest to Longest)
function sortArrayOfString(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].length > arr[j + 1].length) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  console.log("Sorted array of string:", arr);
}

sortArrayOfString(["hi", "javascript", "is", "fun"]);
