function numberToWords(num) {
  if (num === 0) return "zero";

  const belowTwenty = [
      "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
      "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen",
      "eighteen", "nineteen"
  ];
  const tens = [
      "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"
  ];
  const thousands = ["", "thousand", "million", "billion"];

  function helper(n) {
      if (n === 0) return "";
      else if (n < 20) return belowTwenty[n - 1] + " ";
      else if (n < 100) return tens[Math.floor(n / 10) - 2] + " " + helper(n % 10);
      else return belowTwenty[Math.floor(n / 100) - 1] + " hundred " + helper(n % 100);
  }

  let result = "";
  let i = 0;

  while (num > 0) {
      if (num % 1000 !== 0) {
          result = helper(num % 1000) + thousands[i] + " " + result;
      }
      num = Math.floor(num / 1000);
      i++;
  }

  return result.trim();
}

// Example usage:
console.log(numberToWords(12345)); // "twelve thousand three hundred forty-five"
console.log(numberToWords(0));     // "zero"
console.log(numberToWords(105));   // "one hundred five"
