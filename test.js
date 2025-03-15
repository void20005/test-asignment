const { checkNumber, checkName, filterMultiplesOfThree, isValidBracketSequence, inputProcessing } = require("./app.js");

jest.spyOn(console, "log").mockImplementation(() => {});


// Test checkNumber
test("checkNumber should return 'Hello' for numbers greater than 7", () => {
    expect(checkNumber(8)).toBe("Hello");
});

test("checkNumber should return a message for numbers <= 7", () => {
    expect(checkNumber(7)).toBe("The input number is less than or equal to 7");
});

// Test checkName
test("checkName should return 'Hello, John' when input is 'John'", () => {
    expect(checkName("John")).toBe("Hello, John");
});

test("checkName should return 'There is no such name' for other names", () => {
    expect(checkName("Mike")).toBe("There is no such name");
});

// Test filterMultiplesOfThree
test("filterMultiplesOfThree should return only multiples of 3", () => {
    expect(filterMultiplesOfThree([1, 2, 3, 4, 6, 9, 12])).toEqual([3, 6, 9, 12]);
});

test("filterMultiplesOfThree should return empty array if no multiples of 3", () => {
    expect(filterMultiplesOfThree([1, 2, 4, 5])).toEqual([]);
});

// Test isValidBracketSequence
test("isValidBracketSequence should return true for valid sequences", () => {
    expect(isValidBracketSequence("()")).toBe(true);
    expect(isValidBracketSequence("([])")).toBe(true);
    expect(isValidBracketSequence("[()]")).toBe(true);
});

test("isValidBracketSequence should return false for invalid sequences", () => {
    expect(isValidBracketSequence("(")).toBe(false);
    expect(isValidBracketSequence("([)]")).toBe(false);
    expect(isValidBracketSequence("[[")).toBe(false);
});

// Test inputProcessing
test("inputProcessing should process a valid number", () => {
    expect(inputProcessing("8")).toBe("Hello");
});

test("inputProcessing should process a valid name", () => {
    expect(inputProcessing("John")).toBe("Hello, John");
});

test("inputProcessing should process a list of numbers", () => {
    expect(inputProcessing("3, 6, 9")).toBe("The next elements are multiples of three: 3, 6, 9");
});

test("inputProcessing should validate bracket sequence", () => {
    expect(inputProcessing("()[]")).toBe("Is the bracket sequence valid? true");
    expect(inputProcessing("([)]")).toBe("Is the bracket sequence valid? false");
});
