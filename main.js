class Calculator {
  constructor() {
    this.result = 0;
  }

  add(num) {
    this.result += num;
    return this;
  }

  subtract(num) {
    this.result -= num;
    return this;
  }

  multiply(num) {
    this.result *= num;
    return this;
  }

  divide(num) {
    if (num !== 0) {
      this.result /= num;
    } else {
      console.log("Error: Division by zero.");
    }
    return this;
  }

  getResult() {
    return this.result;
  }

  clear() {
    this.result = 0;
    return this;
  }
}

// Example Usage
const calculator = new Calculator();

const result = calculator.add(5).multiply(2).divide(4).subtract(1).getResult();
console.log(result); // Output: 4
