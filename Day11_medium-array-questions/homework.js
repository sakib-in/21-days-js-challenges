//1. a version without using objects
function findLongestSubarray(arr, k) {
  let prefixSum = 0;
  let map = {};
  map[0] = -1;

  let maxLen = 0;
  let startIndex = 0;
  let endIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    prefixSum += arr[i];

    const neededSum = prefixSum - k;

    if (map[neededSum] !== undefined) {
      const length = i - map[neededSum];

      if (length > maxLen) {
        maxLen = length;
        startIndex = map[neededSum] + 1;
        endIndex = i;
      }
    }

    if (map[prefixSum] === undefined) {
      map[prefixSum] = i;
    }
  }

  var result = [];
  for (var j = startIndex; j <= endIndex; j++) {
    result[result.length] = arr[j];
  }

  console.log(result);
}

findLongestSubarray([1, 2, 3, 4, 5], 9);

//2. Find the Length of the Longest Subarray with No Repeating Elements
function longestUniqueSubarray(arr) {
  let freq = {};
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    if (freq[arr[right]] === undefined) {
      freq[arr[right]] = 1;
    } else {
      freq[arr[right]]++;
    }

    while (freq[arr[right]] > 1) {
      freq[arr[left]]--;
      left++;
    }

    let currentLen = right - left + 1;
    if (currentLen > maxLen) {
      maxLen = currentLen;
    }
  }

  console.log(maxLen);
}

longestUniqueSubarray([1, 2, 3, 1, 2, 3, 4]);

//3. Maximum Subarray (Kadane’s Algorithm – O(n))
function maxSubarray(arr) {
  const n = arr.length;

  let maxSum = arr[0];
  let currentSum = arr[0];

  let maxStart = 0;
  let maxEnd = 0;

  let tempStart = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] > currentSum + arr[i]) {
      currentSum = arr[i];
      tempStart = i;
    } else {
      currentSum = currentSum + arr[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
      maxStart = tempStart;
      maxEnd = i;
    }
  }

  const result = [];
  let idx = 0;

  for (let i = maxStart; i <= maxEnd; i++) {
    result[idx] = arr[i];
    idx++;
  }

  console.log("Max Subarray:", result);
}

maxSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

//4. Find the Longest Increasing Subarray (Continuous)
function longestIncreasingSubarray(arr) {
  const n = arr.length;
  let maxLen = 1;
  let maxStart = 0;

  let start = 0;
  let currentLen = 1;

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) {
      currentLen++;
    } else {
      start = i;
      currentLen = 1;
    }

    if (currentLen > maxLen) {
      maxLen = currentLen;
      maxStart = start;
    }
  }

  const result = [];
  let idx = 0;

  const end = maxStart + maxLen - 1;
  for (let i = maxStart; i <= end; i++) {
    result[idx] = arr[i];
    idx++;
  }

  console.log(`Length = ${result.length}, SubArray = [${result}]`);
}

longestIncreasingSubarray([1, 2, 2, 3, 4, 5]);
