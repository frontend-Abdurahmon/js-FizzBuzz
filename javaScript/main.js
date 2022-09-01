var elNumberInput = document.querySelector("#number-input")
var elBtn = document.querySelector("#btn-js")
var elResult = document.querySelector("#result")

elBtn.addEventListener("click", function () {
    
    var inputValue = elNumberInput.value;

    if (inputValue == "") {
        document.querySelector("#warning").textContent = "Please fill out this field"
    }
    else if (inputValue % 3 === 0 && inputValue % 5 === 0) {
        document.querySelector("#warning").textContent = "FizzBuzz"
    } else if (inputValue % 5 === 0) {
        document.querySelector("#result").textContent = "Buzz"
    } else if (inputValue % 3 === 0) {
        document.querySelector("#result").textContent = "Fizz"
    } else {
        elResult.textContent = "No number found";
    }

})