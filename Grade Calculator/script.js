function calculateGrade() {
  let inputs = document.querySelectorAll("input");
  let arr = [];

  for (let input of inputs) {
    let value = Number(input.value);

    if (isNaN(value) || value < 0) {
      alert("Please enter valid grades");
      return;
    }

    arr.push(value);
  }

  let total = 0;
  let highest = arr[0];
  let lowest = arr[0];

  for (let score of arr) {
    total += score;

    if (score > highest) highest = score;
    if (score < lowest) lowest = score;
  }

  let average = total / arr.length;
  let grade = "";

  if (average >= 90) grade = "A";
  else if (average >= 80) grade = "B";
  else if (average >= 70) grade = "C";
  else if (average >= 60) grade = "D";
  else grade = "F";

  document.getElementById("result").innerHTML = `
    <p>Average: ${average.toFixed(2)}</p>
    <p>Highest: ${highest}</p>
    <p>Lowest: ${lowest}</p>
    <div class="grade">Grade: ${grade}</div>
  `;
}
