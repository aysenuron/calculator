const displayDigit = document.createElement("p");
displayDigit.classList.add("displayed-digit")

const display = document.querySelector(".display")
display.appendChild(displayDigit);

const digitButtons = document.querySelectorAll(".on-screen");

const digitContainer = document.querySelector(".digit-buttons");

const clearButton = document.querySelector(".clear");

function displayNumber(event) {
    const clickedNumber = event.target.textContent;
    displayDigit.textContent += clickedNumber;
}

digitButtons.forEach((digit) => {
    digit.addEventListener("click", displayNumber);
}); 

function clearDisplay(screen) {
    screen.textContent = "";
}

clearButton.addEventListener("click", () => clearDisplay(displayDigit));
