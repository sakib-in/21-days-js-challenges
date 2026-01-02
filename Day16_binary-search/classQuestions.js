//1. Find an Element Using Binary Search
function binarySearch(arr, target) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      console.log(`${target} found at index: ${mid}`);
      return;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(`${target} not found in given array`);
}

binarySearch([1, 3, 5, 7, 9], 7);

//2. Find the First Occurrence of a Repeated Number
function findFirstOccurrence(arr, target) {
  let start = 0,
    end = arr.length - 1,
    ans = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      ans = mid;
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(`${target} first occurrence at index: ${ans}`);
}

findFirstOccurrence([2, 4, 4, 4, 9, 11], 4);

//3. Find the Last Occurrence of a Repeated Number
function findLastOccurrence(arr, target) {
  let start = 0,
    end = arr.length - 1,
    ans = -1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      ans = mid;
      start = mid + 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  console.log(`${target} last occurrence at index: ${ans}`);
}

findLastOccurrence([2, 4, 4, 4, 9, 11], 4);
