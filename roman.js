function decimalToRoman(decimal) {
  const romanNumerals = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

  let roman = "";

  for (let i = 0; i < romanNumerals.length; i++) {
    const numeral = romanNumerals[i];
    while (decimal >= numeral.value) {
      roman += numeral.symbol;
      decimal -= numeral.value;
    }
  }

  return roman;
}

function convert() {
  const decimalInput = document.getElementById("decimal-input");
  const resultElement = document.getElementById("result");
  const bodyElement = document.body;

  const decimal = parseInt(decimalInput.value);

  if (isNaN(decimal) || decimal < 0 || decimal > 100000) {
    resultElement.textContent = "Please enter a valid decimal number between 0 and 100000.";
  } else {
    const roman = decimalToRoman(decimal);
    resultElement.textContent = roman;
  }

  // Set random background color
  bodyElement.style.backgroundColor = getRandomColor();
}

var input = document.getElementById("decimal-input");
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    convert();
  }
});

// Function to generate a random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
