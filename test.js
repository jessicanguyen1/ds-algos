const reverse = require("./reverse-string/index");
const palindrome = require("./palindromes/index");

/**
 * Testing for reverse-string
 */
test("Reverse function is defined", () => {
  expect(typeof reverse).toEqual("function");
});

test("Reverse reverses 'jess' to 'ssej'", () => {
  expect(reverse("jess")).toEqual("ssej");
});

test("Reverse reverses '  abcd' to 'dcba  '", () => {
  expect(reverse("  abcd")).toEqual("dcba  ");
});

/**
 * Testing for palindromes
 */

// Test to make sure we have imported the function
test("Palindrome function is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test("Test to see if 'aba' is a palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});

test("Test if '  aba' is NOT a palindrome", () => {
  expect(palindrome("   aba")).toBeFalsy();
});
