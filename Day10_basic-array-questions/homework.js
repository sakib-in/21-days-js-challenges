//1. Find the Second Largest Element
function secondLargest(arr) {
  let max = Math.max(arr[0], arr[1]);
  let secMax = Math.min(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secMax = max;
      max = arr[i];
    } else if (arr[i] > secMax && arr[i] !== max) {
      secMax = arr[i];
    }
  }

  console.log("Second largest element:", secMax);
}

secondLargest([10, 20, 4, 45, 99]);

//2. Rotate an Array to the Right by K Steps
function rotateArrayToRightbyK(arr, k) {
  const n = arr.length;

  for (let i = 1; i <= k; i++) {
    let last = arr[n - 1];

    for (let j = n - 1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }

    arr[0] = last;
  }

  console.log("Right Rotated Array:", arr);
}

rotateArrayToRightbyK([1, 2, 3, 4, 5], 2);

//3. Check if Two Arrays Are Equal (Same Order)
function checkEqualArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    console.log("Arrays are not equal");
    return null;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log("Arrays are not equal");
      return null;
    }
  }

  console.log("Array are Equal");
}

checkEqualArrays([1, 2, 3], [1, 2, 3]);

//4. Count Even and Odd Numbers in an Array
function countEvenOddElems(arr) {
  let evenCount = 0,
    oddCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  console.log(`Even = ${evenCount}, Odd = ${oddCount}`);
}

countEvenOddElems([2, 5, 7, 8, 10]);

//5. Find All Unique Pairs Whose Sum Equals a Target
function findEqualPairSumToTarget(arr, target) {
  const n = arr.length;
  let left = 0;
  let right = n - 1;
  let pairs = [];

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === target) {
      pairs.push([arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  console.log("Pairs:", pairs);
}

findEqualPairSumToTarget([1, 2, 3, 4, 5], 6);

//6. Left Shift an Array by One Position
function leftShiftByOne(arr) {
  let first = arr[0];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr[arr.length - 1] = first;

  console.log("Array left rotation by 1:", arr);
}

leftShiftByOne([1, 2, 3, 4]);

//7. Count How Many Times an Element Appears in an Array
function countElementsAppears(arr, target) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  console.log(`${target} appears for ${count} times`);
}

countElementsAppears([1, 4, 4, 4, 2], 4);
