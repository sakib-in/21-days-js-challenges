//1. Sort an Array in Ascending Order Using Selection Sort
function selectionSortAsc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  console.log("Sorted array in ascending order using selection sort:", arr);
}

selectionSortAsc([7, 2, 9, 4, 1]);

//2. Sort an Array in Descending Order
function selectionSortDesc(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] < arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  console.log("Sorted array in descending order using selection sort:", arr);
}

selectionSortDesc([3, 8, 5, 2, 9]);

//3. Find the Kth Smallest Element Using Selection Logic
function findKSmallestElem(arr, k) {
  let min = 0;

  for (let i = 0; i < k; i++) {
    min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  console.log("K smallest element:", arr[k - 1]);
}

findKSmallestElem([9, 4, 7, 1, 3], 3);

//4. Selection Sort but Track Index of Minimum for Each Pass
function trackMinValueEachPass(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    console.log(`Pass ${i + 1} → min value = ${arr[minIndex]}`);
  }
}

trackMinValueEachPass([4, 2, 5, 3, 1]);

//5. Sort an Array of Objects by Name
function sortArrayOfObject(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j].name.toLowerCase() < arr[min].name.toLowerCase()) {
        min = j;
      }
    }

    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  console.log("Sorted array by name:", arr);
}

sortArrayOfObject([{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }]);
