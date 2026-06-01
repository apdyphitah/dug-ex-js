const colorPicker = document.querySelector("#colorPicker");
const previewBox = document.querySelector("#previewBox");
const colorHistory = document.querySelector("#colorHistory");
const clearHistoryBtn = document.querySelector("#clearHistoryBtn");

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;

  previewBox.style.backgroundColor = selectedColor;
  previewBox.textContent = selectedColor;

  const historyItem = document.createElement("li");
  historyItem.textContent = selectedColor;
  historyItem.style.backgroundColor = selectedColor;

  colorHistory.appendChild(historyItem);

  console.log("Selected color:", selectedColor);
});

clearHistoryBtn.addEventListener("click", function () {
  colorHistory.innerHTML = "";
  console.log("Color history cleared");
});