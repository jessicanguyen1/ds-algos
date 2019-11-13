const reverse = require("./reverse-string/index");
const palindrome = require("./palindromes/index");

/**
 * Testing for reverse-string
 */
test("Reverse function exists", () => {
  expect(typeof reverse).toEqual("function");
});

test("Reverse reverses a string", () => {
  expect(reverse("boi")).toEqual("iob");
});

test("Reverse reverses a string", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

/**
 * Testing for palindromes
 */

// Test to make sure we have imported the function
test("Check if palindrome is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test("Test if string is a palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});
