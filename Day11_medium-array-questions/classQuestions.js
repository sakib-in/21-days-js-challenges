//1. Find Missing Number from Range 1 to N
function findMissingNumber(arr) {
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((acc, curr) => acc + curr, 0);

  const missingNum = expectedSum - actualSum;

  console.log("Missing Number:", missingNum);
}

findMissingNumber([1, 5, 2, 4]);

//2. Move All Zeroes to End (Stable, O(n))
function moveZeroesToEnd(arr) {
  let pos = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }

  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }

  console.log("New array with all zeroes at end:", arr);
}

moveZeroesToEnd([0, 1, 0, 3, 12]);

//3. Find the First Repeating Element in an Array
function findFirstReaptingElem(arr) {
  const obj = {};

  for (const el of arr) {
    if (obj[el]) {
      console.log("First reapting element:", el);
      return el;
    }
    obj[el] = true;
  }

  console.log("No repeating element found");
  return null;
}

findFirstReaptingElem([10, 5, 3, 4, 3, 5, 6]);

//4. Maximum Subarray Sum (Kadane’s Algorithm – O(n))
function findMaxSubarraySum(arr) {
  let currentSum = arr[0];
  let maxSum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    currentSum = Math.max(currentSum + arr[i], arr[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  console.log("Max subarray sum:", maxSum);
}

findMaxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
