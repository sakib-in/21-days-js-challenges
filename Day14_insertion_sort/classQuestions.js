//1. Sort an Array in Ascending Order Using Insertion Sort
function insertionSortAsc(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  console.log("Sorted array in ascending order:", arr);
}

insertionSortAsc([9, 5, 1, 4, 3]);

//2. Sort an Array in Descending Order
function insertionSortDesc(arr) {
  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let prev = i - 1;

    while (prev >= 0 && arr[prev] < current) {
      arr[prev + 1] = arr[prev];
      prev--;
    }

    arr[prev + 1] = current;
  }

  console.log("Sorted array in descending order:", arr);
}

insertionSortDesc([3, 8, 2, 7, 4]);

//3.  Insert a New Element into an Already Sorted Array (Using Insertion Logic)
function insertNewElem(arr, el) {
  arr.push(el);
  const n = arr.length;

  const current = arr[n - 1];
  let prev = n - 2;

  while (prev >= 0 && arr[prev] > current) {
    arr[prev + 1] = arr[prev];
    prev--;
  }

  arr[prev + 1] = current;

  console.log(arr);
}

insertNewElem([1, 3, 5, 6], 4);
