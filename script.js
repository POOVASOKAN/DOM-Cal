let result = document.getElementById("result");

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", handleKeyPress);
  createButtons();
  createClearButton();  
  createEqualButton();  
  createAddButton(); 
  createSubtractButton(); // Call the function to create the Subtract button
});

function handleKeyPress(event) {
  const key = event.key;
  if (!isNaN(key) || key === ".") {
    display(key);
  } else {
    alert("Only numbers and the decimal point are allowed");
  }
}

function display(num) {
  result.value += num;
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (err) {
    alert("Invalid Input, Please try again");
  }
}

function createButtons() {
  const buttonContainer = document.getElementById("button-container");

  const buttonLabels = [
    
    "Del",
    "%",
    "/",
    "7",
    "8",
    "9",
    "4",
    "5",
    "6",
    "1",
    "2",
    "3",
    "0",
    ".",
    
    
  ];

  buttonLabels.forEach((label) => {
    const button = document.createElement("button");
    button.className = "btn btn-light col";
    button.textContent = label;
    if (!isNaN(label) || label === "=") {
        button.id = label;
      }
    button.onclick = () => handleButtonClick(label);
    buttonContainer.appendChild(button);
  });
}

function createClearButton() {
    const buttonContainer = document.getElementById("button-container");
  
    const clearButton = document.createElement("button");
    clearButton.id = "clear";
    clearButton.className = "btn btn-light col";
    clearButton.textContent = "Cl";
    clearButton.onclick = Clear;
    buttonContainer.appendChild(clearButton);
  }
  function createAddButton() {
    const buttonContainer = document.getElementById("button-container");
  
    const addButton = document.createElement("button");
    addButton.id = "add";
    addButton.className = "btn btn-light col";
    addButton.textContent = "+";
    addButton.onclick = () => handleButtonClick("+");
    buttonContainer.appendChild(addButton);
  }
  
  function createSubtractButton() {
    const buttonContainer = document.getElementById("button-container");
  
    const subtractButton = document.createElement("button");
    subtractButton.id = "subtract";
    subtractButton.className = "btn btn-light col";
    subtractButton.textContent = "-";
    subtractButton.onclick = () => handleButtonClick("-");
    buttonContainer.appendChild(subtractButton);
  }
function createEqualButton() {
  const buttonContainer = document.getElementById("button-container");

  const equalButton = document.createElement("button");
  equalButton.id = "equal";
  equalButton.className = "btn btn-light col";
  equalButton.textContent = "=";
  equalButton.onclick = () => handleButtonClick("=");
  buttonContainer.appendChild(equalButton);
}

function handleButtonClick(label) {
  switch (label) {
    case "=":
      calculate();
      break;
    case "Cl":
      Clear();
      break;
    case "Del":
      Del();
      break;
    default:
      display(label);
      break;
  }
}

function Clear() {
  result.value = "";
}

function Del() {
  result.value = result.value.slice(0, -1);
}
