//1. Find the K Largest Elements Without Full Sorting
function kLargest(arr, k) {
  const n = arr.length;

  for (let i = 0; i < k; i++) {
    let maxIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }

    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }

  console.log("K largest element:", arr.slice(0, k));
}

kLargest([5, 1, 9, 3, 7], 2);

//2. Sort a 2D Array by Second Element in Each Subarray
function sortBySecondElem(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIdex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j][1] < arr[minIdex][1]) {
        minIdex = j;
      }
    }
    [arr[i], arr[minIdex]] = [arr[minIdex], arr[i]];
  }

  console.log("Sorted array:", arr);
}

sortBySecondElem([
  [3, 9],
  [1, 4],
  [2, 5],
]);

//3. Sort an Array and Count How Many Times Minimum Changed
function countMinChanges(arr) {
  let currentMin = arr[0];
  let count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < currentMin) {
      currentMin = arr[i];
      count++;
    }
  }

  console.log("Count of minimum change:", count);
  return count;
}

countMinChanges([8, 3, 5, 2, 6]);

//4. Sort Only Elements at Even Indexes
function sortEvenIndices(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i += 2) {
    let minIndex = i;

    for (let j = i + 2; j < n; j += 2) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  console.log("Sorted at even index:", arr);
  return arr;
}

sortEvenIndices([9, 4, 7, 6, 3, 2]);

//5. Sort an Array of Characters by ASCII Value
function sortByASCII(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (arr[j].charCodeAt(0) < arr[minIndex].charCodeAt(0)) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  console.log("Sorted:", arr);
  return arr;
}

sortByASCII(["d", "A", "c", "B"]);
