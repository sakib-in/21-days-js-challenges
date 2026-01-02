// 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkCharacterType(ch) {
  const code = ch.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    console.log(`1. '${ch}' is an Uppercase Letter`);
  } else if (code >= 97 && code <= 122) {
    console.log(`1. '${ch}' is a Lowercase Letter`);
  } else if (code >= 48 && code <= 57) {
    console.log(`1. '${ch}' is a Digit`);
  } else {
    console.log(`1. '${ch}' is a Special Character`);
  }
}

checkCharacterType("A");

// 2. Check Triangle Type Using Sides (a, b, c)
function checkTriangleType(x, y, z) {
  if (x + y <= z || y + z <= x || x + z <= y) {
    console.log("Triangle is not possible - Try Again");
  } else {
    if (x === y && y === z) {
      console.log("2. Triangle Type: Equilateral");
    } else if (x === y || y === z || x === z) {
      console.log("2. Triangle Type: Isosceles");
    } else if (
      x * x + y * y === z * z ||
      x * x + z * z === y * y ||
      z * z + y * y === x * x
    ) {
      console.log("2. Triangle Type: Right-Angled");
    } else {
      console.log("2. Triangle Type: Scalene");
    }
  }
}

checkTriangleType(3, 4, 5);

// 3. Calculate Income Tax Based on Slabs
function calculateIncomeTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  console.log(
    `3. Tax on Income ₹${income.toLocaleString()} = ₹${tax.toLocaleString()}`
  );
}

calculateIncomeTax(750000);
