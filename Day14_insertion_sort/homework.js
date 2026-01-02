//1. Sort an Array but Keep Odd Numbers Fixed
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

sortOnlyEvenNum([9, 4, 7, 6, 3, 2]);

//2. Sort an Array Using Insertion Sort but Print Array After Each Pass
function printAfterEachPass(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
    console.log("Pass " + i + ":", arr);
  }
}

printAfterEachPass([5, 2, 4, 6, 1]);

//3. Find the Position Where an Element Should Be Inserted in a Sorted Array
function findPositionOfInsert(arr, el) {
  arr.push(el);
  const n = arr.length;

  const current = arr[n - 1];
  let currentIdx = n;
  let prev = n - 2;

  while (prev >= 0 && arr[prev] > current) {
    arr[prev + 1] = arr[prev];
    currentIdx--;
    prev--;
  }

  const insertIndex = prev + 1;
  arr[insertIndex] = current;

  console.log(`Inserted element index in sorted array: ${insertIndex}`);
}

findPositionOfInsert([2, 4, 6, 8], 5);

//4. Check If an Array Becomes Sorted After Inserting One Element
function isSortedAfterInsert(arr) {
  const n = arr.length;
  const current = arr[n - 1];
  let prev = n - 2;

  while (prev >= 0 && arr[prev] > current) {
    arr[prev + 1] = arr[prev];
    prev--;
  }

  arr[prev + 1] = current;

  for (let i = 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

isSortedAfterInsert([1, 2, 4, 5, 3]);

//5. Use Insertion Sort to Sort Only the Even Index Positions
function sortEvenIndex(arr) {
  for (let i = 2; i < arr.length; i += 2) {
    const current = arr[i];
    let prev = i - 2;

    while (prev >= 0 && arr[prev] > current) {
      arr[prev + 2] = arr[prev];
      prev -= 2;
    }
    arr[prev + 2] = current;
  }
  console.log("Sorted array by even index:", arr);
}

sortEvenIndex([9, 1, 8, 2, 7, 3]);
