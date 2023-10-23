// Pythagorean Theorem

document.getElementById("btn").addEventListener("click", btnlicked);

// Function
function btnlicked() {
  // Variables
  let numA = +document.getElementById("a2").value;
  let numB = +document.getElementById("b2").value;

  // PROCESS
  let numC = Math.sqrt(numA ** 2 + numB ** 2);

  // OUTPUT
  document.getElementById("c2").innerHTML = numC;
}
