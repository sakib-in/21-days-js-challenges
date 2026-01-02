//1. Check If an Element Exists in a 2D Array
function checkIn2DArray(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === target) {
        console.log(`${target} found at position (${i},${j})`);
        return;
      }
    }
  }

  console.log(`${target} not found`);
}

checkIn2DArray(
  [
    [1, 2],
    [3, 4],
    [5, 6],
  ],
  4
);

//2. Find the Minimum Value Using Linear Scan
function findMinimumValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(`Minimum Value is: ${min}`);
}

findMinimumValue([9, 3, 5, 1, 7]);

//3. Find the Maximum Value Using Linear Scan
function findMaximumValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(`Maximum Value is: ${max}`);
}

findMaximumValue([4, 9, 2, 11, 6]);

//4. Find the First Element Greater Than X
function findFirstGreatest(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > target) {
      console.log(`First greatest element: ${arr[i]}`);
      return;
    }
  }

  console.log(`No element is greater than ${target}`);
}

findFirstGreatest([2, 5, 9, 12, 15], 10);

//5. Check if Array is Strictly Increasing (Using Linear Scan)
function isStrictlyIncreasing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      console.log("Not Strictly Increasing");
      return;
    }
  }

  console.log("Strictly Increasing");
}

isStrictlyIncreasing([1, 2, 3, 5, 4]);

//6. Find the First String That Starts With a Given Character
function findFirstString(arr, char) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === char) {
      console.log(`First string including ${char}: ${arr[i]}`);
      return;
    }
  }
  console.log(`No string starts with ${char}`);
}

findFirstString(["apple", "ball", "cat", "apply"], "a");
