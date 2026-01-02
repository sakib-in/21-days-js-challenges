//1. Find the Maximum and Minimum Element
function minMaxElement(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(`Max = ${max}, Min = ${min}`);
}

minMaxElement([10, 25, 3, 18]);

//2. Reverse an Array (Manual Method Only)
function reverseArray(arr) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }

  console.log("Reversed Array:", arr);
}

reverseArray([1, 2, 3, 4, 5]);

//3. Check if an Array is Sorted (Ascending)
function isSortedArray(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      console.log("Array is not Sorted");
      return;
    }
  }

  console.log("Array is Sorted");
}

isSortedArray([1, 2, 3, 4, 5]);

//4. Remove All Duplicates From an Array (Use filter method)
function removeDuplicates(arr) {
  const newArray = arr.filter((el, index) => {
    return arr.indexOf(el) === index;
  });

  console.log("Array after removing duplicate elements:", newArray);
}

removeDuplicates([1, 2, 2, 3, 3, 4]);

//5. Merge Two Arrays Without Using concat or spread
function mergeArrays(arr1, arr2) {
  let mergedArray = [];

  for (let el of arr1) {
    mergedArray.push(el);
  }

  for (let el of arr2) {
    mergedArray.push(el);
  }

  console.log("Merged Array:", mergedArray);
}

mergeArrays([1, 2, 3], [4, 5]);
