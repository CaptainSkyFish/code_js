/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input. Please provide a valid number.");
    }
    this.result += num;
  }

  subtract(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input. Please provide a valid number.");
    }
    this.result -= num;
  }

  multiply(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input. Please provide a valid number.");
    }
    this.result *= num;
  }

  divide(num) {
    if (isNaN(num)) {
      throw new Error("Invalid input. Please provide a valid number.");
    }
    if (num === 0) {
      throw new Error("Cannot divide by zero.");
    }
    this.result /= num;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  calculate(expression) {
    const tokens = expression.replace(/\s+/g, "").match(/\d+|[+\-*\/()]/g);

    if (expression.replace(/\s+/g, "").includes("/0")) {
      throw new Error("Cannot divide by zero.");
    }
    if (!tokens || tokens.length === 0) {
      throw new Error(
        "Invalid expression. Please provide a valid arithmetic expression."
      );
    }

    this.result = eval(expression);
  }
}

module.exports = Calculator;
