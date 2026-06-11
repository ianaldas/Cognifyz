const addBtn = document.getElementById("addBtn");
const result = document.getElementById("result");

addBtn.addEventListener("click", function () {
  const num1 = document.getElementById("num1").value;
  const num2 = document.getElementById("num2").value;

  // Validation: check if both fields are filled
  if (num1 === "" || num2 === "") {
    result.textContent = "⚠️ Please enter both numbers!";
    result.classList.remove("hidden");
    result.classList.add("error");
    return;
  }

  const sum = parseFloat(num1) + parseFloat(num2);

  result.textContent = `✅  Result: ${num1} + ${num2} = ${sum}`;
  result.classList.remove("hidden", "error");
});