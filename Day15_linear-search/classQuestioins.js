//1. Find an Element in an Array Using Linear Search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`${target} found at index ${i}`);
      return;
    }
  }
  console.log(`${target} not found in given index.`);
}

linearSearch([4, 2, 7, 1, 9], 7);

//2. Find the First Occurrence of an Element
function firstOccurrence(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`${target} first occure at index ${i}`);
      return;
    }
  }

  console.log(`${target} not found`);
}

firstOccurrence([3, 5, 3, 7, 3], 3);

//3. Find the Last Occurrence of an Element
function lastOccurrence(arr, target) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      console.log(`${target} first occure at index ${i}`);
      return;
    }
  }
  console.log(`${target} not found`);
}

lastOccurrence([3, 5, 3, 7, 3], 3);

//4. Count How Many Times an Element Appears
function countElementAppearens(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      count++;
    }
  }

  console.log(`${target} foung ${count} times`);
}

countElementAppearens([1, 2, 2, 3, 2, 4], 2);

//5. Find All Indexes Where the Element Appears
function findAllIndexes(arr, target) {
  const indexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indexes.push(i);
    }
  }

  console.log("Indexes:", indexes);
}

findAllIndexes([5, 7, 5, 9, 5], 5);

//6. Linear Search in Array of Objects
function linearSearchInObj(arr, searchId) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === searchId) {
      console.log(arr[i]);
      return;
    }
  }
  console.log("Not found");
}

linearSearchInObj(
  [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ],
  2
);
