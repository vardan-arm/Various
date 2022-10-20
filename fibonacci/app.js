"use strict";

// Recursively generate an Array of the Fibonacci sequence
// https://stackoverflow.com/questions/36415203/how-can-i-recursively-generate-an-array-of-the-fibonacci-sequence

function fib(n) {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]
  const arr = fib(n - 1)
  return [...arr, arr[n - 1] + arr[n - 2]]
}

console.log(fib(15))
