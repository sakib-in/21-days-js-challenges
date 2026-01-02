//1. Sort an Array in Ascending Order Using Bubble Sort
function sortInAscendingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;
  }

  console.log("Array in Ascending Order:", arr);
  return arr;
}

sortInAscendingOrder([5, 3, 8, 4, 2]);

//2. Sort an Array in Descending Order Using Bubble Sort
function sortInDescendingOrder(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] < arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;
  }

  console.log("Array in Descending Order:", arr);
  return arr;
}

sortInDescendingOrder([7, 1, 5, 3, 2]);

//3. Sort a String Alphabetically Using Bubble Sort Logic
function sortString(str) {
  const arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase()) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }

  console.log("Sorted String:", arr.join(""));
}

sortString("javascript");

//4. Sort an Array and Count the Number of Swaps Performed
function countSwap(arr) {
  let swapCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let isSorted = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapCount++;
        isSorted = true;
      }
    }

    if (!isSorted) break;
  }

  console.log("Sorted Array:", arr);
  console.log("Swaps:", swapCount);
  return arr;
}

countSwap([4, 3, 2, 1]);
