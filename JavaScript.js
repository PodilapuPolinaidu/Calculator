// Make a simple calculator

const operator = prompt(`Enter any operator`);

const num1 = parseFloat(prompt(`Enter the number`));
const num2 = parseFloat(prompt(`Enter the number`));
let result;
//Using If else if
// if (operator == "+") {
//  result = num1 + num2;

// } else if (operator == "-") {
//   result = num1 - num2;
// } else if (operator == "*") {
//   result = num1 * num2;
// } else if (operator == "/") {
//   result = num1 / num2;
// } else {
//   result = num1 ** num2;
// }
// document.write(`${num1} ${operator} ${num2} = ${result}`);

// Using switch
switch (operator) {
  case "+":
    result = num1 + num2;
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    break;
  case "-":
    result = num1 - num2;
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    break;
  case "*":
    result = num1 * num2;
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    break;
  case "/":
    result = num1 / num2;
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    break;
  case "%":
    result = num1 % num2;
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    break;
  case "**":
    result = num1 ** num2;
    document.write(`${num1} ${operator} ${num2} = ${result}`);
    break;
  default:
    document.write(`Invalid operator`);
}
