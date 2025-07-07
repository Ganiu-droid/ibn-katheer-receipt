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

// document.getElementById("add-subject").addEventListener("click", function() {
//     const tableBody = document.getElementById("subject-table-body");

//     const newRow = document.createElement("tr");
//     newRow.innerHTML = `
//         <td><input type="text" class="form-control subject-input" placeholder="Enter subject"></td>
//         <td><input type="number" class="form-control score-input" placeholder="Enter score"></td>
//         <td><button class="btn btn-success btn-save">Save</button>
//             <button class="btn btn-danger btn-delete">Delete</button></td>
//     `;
//     tableBody.appendChild(newRow);

//     newRow.querySelector(".btn-save").addEventListener("click", function() {
//         const subject = newRow.querySelector(".subject-input").value.trim();
//         const score = newRow.querySelector(".score-input").value.trim();

//         if (subject && score) {
//             document.getElementById("display-results").innerHTML += `
//                 <tr>
//                     <td>${subject}</td>
//                     <td>${score}</td>
//                 </tr>
//             `;
//             newRow.remove(); // Remove the input row after saving
//         } else {
//             alert("Please enter both subject and score.");
//         }
//     });

//     newRow.querySelector(".btn-delete").addEventListener("click", function() {
//         newRow.remove();
//     });

// });
// Example usage:


// ======HANDLE EXAM SCORE=========

console.log(numberToWords(12345)); // "twelve thousand three hundred forty-five"
console.log(numberToWords(0));     // "zero"
console.log(numberToWords(105));   // "one hundred five"
