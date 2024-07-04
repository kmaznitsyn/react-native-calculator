function plus(num1: number, num2: number): number {
  return num1 + num2;
}

function substract(num1: number, num2: number): number {
  return num1 - num2;
}

function divide(num1: number, num2: number): number {
  if (num2 === 0) {
    throw new Error("Unsupported math operation type!");
  }
  return num1 / num2;
}

function multiply(num1: number, num2: number): number {
  return num1 * num2;
}

export function performCalculation(
  operand: string,
  num1: number,
  num2: number
) {
  console.log(num1);
  console.log(num2);
  if (operand === "+") {
    return plus(num1, num2);
  } else if (operand === "-") {
    return substract(num1, num2);
  } else if (operand === "/") {
    return divide(num1, num2);
  } else if (operand === "*") {
    return multiply(num1, num2);
  }
  throw new Error("Unsupported math operation type!");
}
