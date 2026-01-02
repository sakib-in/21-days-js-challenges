const n = 5;

//1. Print Hollow Inverted Pyramid
function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i === 1 || i + j === 2 * n || i === j) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHollowPyramid(n);

//2. Print Butterfly Pattern
function printButterfly(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n || i === j || i + j === n + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

printButterfly(n);

//3. Print Diamond Pattern
function printDiamond(n) {
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

  for (let i = n - 1; i >= 1; i--) {
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

printDiamond(n);

//4. Print Hourglass Pattern
function printHourglass(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i === 1 || j + i === 2 * n || i === j || i === 2 * n - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

printHourglass(n);

//5. Print Hollow Diamond Pattern
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

//6. Print Rhombus Pattern
function printRhombus(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

printRhombus(n);

//7. Print Multiplication Table (Single and Upto N)
function printSingleTable(num) {
  console.log(`\n📘 Multiplication Table of ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

printSingleTable(n);

function printTablesUptoN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`\n📗 Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}

printTablesUptoN(3);
