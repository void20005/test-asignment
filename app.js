const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let stopWord = "exit";
start();

function start() {
  menu(stopWord);
  askInput();
}

function askInput() {
  rl.question("💡 **Enter your input below:** ", (input) => {
    input = input.trim();
    if (input === stopWord) {
      console.log("👋 Exiting...");
      return rl.close();
    }

    console.log(inputProcessing(input));

    askContinue();
  });
}

function askContinue() {
  rl.question("💡 **Do you want to continue? Yes/No:** ", (input) => {
    input = input.trim().toLowerCase();
    if (input === "yes" || input === "y") {
      askInput();
    } else {
      console.log("👋 Exiting...");
      rl.close();
    }
  });
}

function menu(stopWord) {
  console.log("\n👋 **Welcome to the Interactive Program!**");
  console.log("🔹 This program processes the entered data.\n");

  console.log(
    "🔹 Depending on your input, you will receive the following output:\n"
  );
  console.log("📌 **Number Input (Any integer):**");
  console.log("   ➤ If the number is greater than 7, it will print 'Hello'.\n");

  console.log("📌 **Name Input (Any name - latin letters):**");
  console.log("   ➤ If the name is 'John', it will greet him.");
  console.log("   ➤ Otherwise, it will say the name is unknown.\n");

  console.log("📌 **Array of Numbers (Set of any comma-separated integers):**");
  console.log(
    "   ➤ It will filter and print numbers that are multiples of 3.\n"
  );

  console.log("📌 **Bracket Sequence:**");
  console.log("   ➤ It will check if the sequence is valid.\n");

  console.log("📌 **To exit: \n");
  console.log(`   ➤ Please type "${stopWord}".\n`);
}

function inputProcessing(input) {
  if (/^-?\d+$/.test(input)) {
    return checkNumber(Number(input));
  } else if (/^[A-Za-z][a-z]+([-' ][A-Za-z][a-z])*$/.test(input)) {
    return `${checkName(input)}`;
  } else if (/^\s*-?\d+(\s*,\s*-?\d+)*\s*$/.test(input)) {
    const newArr = filterMultiplesOfThree(input.split(/\s*,\s*/).map(Number));
    return `The next elements are multiples of three: ${newArr.join(", ")}`;
  } else if (/^[()\\[\]{}]+$/.test(input)) {
    return `Is the bracket sequence valid? ${isValidBracketSequence(input)}`;
  } else return "Your input is invalid!";
}

function checkNumber(num) {
  if (num > 7) {
    return "Hello";
  } else {
    return "The input number is less than or equal to 7";
  }
}

function checkName(name) {
  if (name === "John") {
    return "Hello, John";
  } else {
    return "There is no such name";
  }
}

function filterMultiplesOfThree(arr) {
  const new_arr = arr.filter((num) => num % 3 === 0);
  return new_arr;
}

function isValidBracketSequence(sequence) {
  const stack = []; // Stack to store opening brackets
  const brackets = { "(": ")", "[": "]" }; // Dictionary of matching brackets

  for (let char of sequence) {
    if (char === "(" || char === "[") {
      stack.push(char); // Push opening bracket to the stack
    } else if (char === ")" || char === "]") {
      // If the stack is empty or the top element doesn't match, return false
      if (!stack.length || brackets[stack.pop()] !== char) return false;
    }
  }
  return stack.length === 0; // The sequence is valid if the stack is empty
}

module.exports = {
  checkNumber,
  checkName,
  filterMultiplesOfThree,
  isValidBracketSequence,
  inputProcessing
};
