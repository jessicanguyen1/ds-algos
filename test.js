const reverse = require("./reverse-string/index");
const palindrome = require("./palindromes/index");
const intReversal = require("./integer-reversal/index");
const maxChars = require("./max-chars/index");
const fizzBuzz = require("./fizz-buzz/index");
const arrayChunking = require("./array-chunking");

// Testing for reverse-string

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

// Test to make sure we imported the function
test("Palindrome function is defined", () => {
  expect(typeof palindrome).toEqual("function");
});

test("Test to see if 'aba' is a palindrome", () => {
  expect(palindrome("aba")).toBeTruthy();
});

test("Test if '  aba' is NOT a palindrome", () => {
  expect(palindrome("   aba")).toBeFalsy();
});

/**
 * Testing for integer reversal
 */

// Test to make sure we imported the function
test("Integer reversal function is defined", () => {
  expect(typeof intReversal).toEqual("function");
});

test("intReversal reverses 32089 to 98023", () => {
  expect(intReversal(321)).toBe(123);
});

test("Test to fail if the value ends with 0", () => {
  expect(intReversal(320)).toBeFalsy();
});

/**
 * Testing for Max-Characters
 */

test("Max-chars function is defined", () => {
  expect(typeof maxChars).toEqual("function");
});

test("Test if a is the max character of yaaaaaaaay", () => {
  expect(maxChars("yaaaaaaaay")).toMatch(/a/);
  //  REMEMBER... expect is it's own function!
});

/**
 * Testing for Fizz-Buzz
 */

test("Fizz-buzz function is defined", () => {
  expect(typeof fizzBuzz).toEqual("function");
});

// Testing for Array Chunking
test("Array chunking function is defined", () => {
  expect(typeof arrayChunking).toEqual("function");
});
