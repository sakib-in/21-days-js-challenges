//1. Convert All String Values to Uppercase in a Nested Object
function convertToUpper(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      obj[key] = obj[key].toUpperCase();
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      convertToUpper(obj[key]);
    }
  }
  return obj;
}

console.log(
  convertToUpper({
    name: "john",
    details: {
      city: "mumbai",
      role: "dev",
    },
  })
);

//2. Count How Many Times a Key Appears in a Nested Object
function countKey(obj, targetKey) {
  let count = 0;

  for (let key in obj) {
    if (key === targetKey) {
      count++;
    }

    if (typeof obj[key] === "object" && obj[key] !== null) {
      count += countKey(obj[key], targetKey);
    }
  }

  return count;
}

console.log(
  countKey(
    {
      a: 1,
      b: {
        a: 2,
        c: {
          a: 3,
        },
      },
    },
    "a"
  )
);

//3. Find the Depth of a Nested Object
function getObjectDepth(obj) {
  let maxDepth = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const depth = getObjectDepth(obj[key]);
      if (depth > maxDepth) {
        maxDepth = depth;
      }
    }
  }

  return maxDepth + 1;
}

console.log(
  getObjectDepth({
    a: {
      b: {
        c: {
          d: 1,
        },
      },
    },
  })
);

//4.  Check If a Value Exists in a Nested Object
function valueExists(obj, targetValue) {
  for (let key in obj) {
    if (obj[key] === targetValue) {
      return true;
    }
    if (typeof obj[key] === "object" && obj[key] !== null) {
      if (valueExists(obj[key], targetValue)) {
        return true;
      }
    }
  }
  return false;
}

console.log(
  valueExists(
    {
      name: "A",
      info: {
        age: 25,
        address: {
          city: "Delhi",
        },
      },
    },
    "Delhi"
  )
);

//5. Replace a Value in a Nested Object Using Recursion
function replaceValue(obj, targetValue, newValue) {
  for (let key in obj) {
    if (obj[key] === targetValue) {
      obj[key] = newValue;
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      replaceValue(obj[key], targetValue, newValue);
    }
  }
  return obj;
}

console.log(
  replaceValue(
    {
      name: "A",
      info: {
        age: 25,
        address: {
          city: "Delhi",
        },
      },
    },
    "Delhi",
    "Bangalore"
  )
);

//6. Count Total Number of Objects Inside a Nested Structure
function countObjects(obj) {
  let count = 0;

  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      count++;
      count += countObjects(obj[key]);
    }
  }

  return count;
}

console.log(
  countObjects({
    a: {},
    b: {
      c: {},
      d: {
        e: {},
        f: 5,
      },
    },
  })
);

//7. Find the Path to a Given Key in a Nested Object
function findKeyPath(obj, targetKey, path = "") {
  for (let key in obj) {
    const currentPath = path ? `${path}.${key}` : key;

    if (key === targetKey) {
      return currentPath;
    }

    if (typeof obj[key] === "object" && obj[key] !== null) {
      const result = findKeyPath(obj[key], targetKey, currentPath);
      if (result) {
        return result;
      }
    }
  }

  return null;
}

console.log(
  findKeyPath(
    {
      a: {},
      b: {
        c: {},
        d: {
          e: {},
          f: 5,
        },
      },
    },
    "e"
  )
);

//8. Find the Maximum Numeric Value in a Nested Object
function findMaxValue(obj) {
  let max = -Infinity;

  for (let key in obj) {
    if (typeof obj[key] === "number") {
      if (obj[key] > max) {
        max = obj[key];
      }
    } else if (typeof obj[key] === "object" && obj[key] !== null) {
      const nestedMax = findMaxValue(obj[key]);
      if (nestedMax > max) {
        max = nestedMax;
      }
    }
  }

  return max;
}

console.log(
  findMaxValue({
    a: 4,
    b: {
      c: 9,
      d: {
        e: 2,
      },
    },
  })
);
