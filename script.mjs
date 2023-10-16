function doSum(event) {
    event.preventDefault();
    let firstNumber = document.querySelector("#firstNumber").value
    let secondNumber = document.querySelector("#secondNumber").value
    let result = Number(firstNumber) + Number(secondNumber)
    console.log(result)
    let message = `The sum of ${firstNumber} and ${secondNumber} is ${result}`
    document.querySelector("#resultBox").innerHTML.message
}
console.log("i am here")