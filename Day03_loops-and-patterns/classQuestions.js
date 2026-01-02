const n = 5;

// 1. Print Right-Angled Star Triangle
function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

printRightTriangle(n);

// 2️. Print Inverted Right-Angled Triangle
function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

printInvertedRightTriangle(n);

// 3. Print Pyramid Pattern
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
}

printPyramid(n);

// 4️. Print Inverted Pyramid Pattern
function printInvertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";

    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
}

printInvertedPyramid(n);

// 5️. Print Hollow Square Pattern
function printHollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowSquare(n);

// 6️. Print Hollow Pyramid Pattern
function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i + j === n + 1 || j - i === n - 1 || i === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowPyramid(n);

// 7️. Print Alternating Binary Triangle
function printAlternatingBinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2);
    }
    console.log(str);
  }
}

printAlternatingBinaryTriangle(n);
