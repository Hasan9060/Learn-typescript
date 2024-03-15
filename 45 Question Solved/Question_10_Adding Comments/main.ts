// Question : 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

export{}
// This program performs basic arithmetic operations like addition, subtraction, multiplication, and division.

// Function to add two numbers
function add(num1: number, num2: number): number {
    return num1 + num2;
  }
  
  // Function to subtract two numbers
  function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
  
  // Function to multiply two numbers
  function multiply(num1: number, num2: number): number {
    return num1 * num2;
  }
  
  // Function to divide two numbers
  function divide(num1: number, num2: number): number {
    if (num2 === 0) {
      throw new Error("Cannot divide by zero");
    }
    return num1 / num2;
  }
  
  // Example usage
  const num1 = 10;
  const num2 = 5;
  
  console.log(`Addition: ${add(num1, num2)}`);
  console.log(`Subtraction: ${subtract(num1, num2)}`);
  console.log(`Multiplication: ${multiply(num1, num2)}`);
  console.log(`Division: ${divide(num1, num2)}`);
  