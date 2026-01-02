//1. Print All Values in a Nested Object
function printObjValues(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObjValues(obj[key]);
    } else {
      console.log(obj[key]);
    }
  }
}

printObjValues({
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: "Hi",
      },
    },
  },
});

//2. Count Total Number of Keys in a Nested Object
function countKeys(obj) {
  let count = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    count++;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countKeys(obj[key]);
    }
  }
  return count;
}

console.log(
  countKeys({
    a: 1,
    b: {
      c: 2,
      d: {
        e: 3,
        f: 4,
      },
    },
  })
);

//3. Find the Sum of All Numeric Values in a Nested Object
function calculateSum(obj) {
  let sum = 0;
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      sum += calculateSum(obj[key]);
    } else if (typeof obj[key] === "number") {
      sum += obj[key];
    }
  }
  return sum;
}

console.log(
  calculateSum({
    x: 10,
    y: {
      z: 5,
      w: {
        k: 15,
      },
    },
  })
);

//4. Print All Keys in a Nested Object
function printObjKeys(obj) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    console.log(key);
    if (typeof obj[key] === "object" && obj[key] !== null) {
      printObjKeys(obj[key]);
    }
  }
}

printObjKeys({
  a: {
    b: {
      c: 1,
    },
  },
});
