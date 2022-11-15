"use strict";

/*
* Return fibonacci number
* */

// Recursive approach
function fibonacci(n) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(5)); // 5   // browser tab almost hanged at [n=48, res=2971215073]

// Recursive, with caching
function fibonacciCached(n, cachedObj = {[0]: 0, [1]: 1}) {
  if (n < 1) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }
  // console.log('here', n, cachedObj[n]);
  if (cachedObj[n]) {
    return cachedObj[n];
  }
  cachedObj[n] = fibonacciCached(n - 1, cachedObj) + fibonacciCached(n - 2, cachedObj);

  return cachedObj[n];
}
console.log(fibonacciCached(5));  // 5 // fluently calculated up to [n=8925, result is Infinity] before throwing "RangeError: Maximum call stack size exceeded"


/*
* Return an Array with the Fibonacci sequence
* */

// https://stackoverflow.com/questions/36415203/how-can-i-recursively-generate-an-array-of-the-fibonacci-sequence
function fibonacciSequence(n) {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]
  const arr = fibonacciSequence(n - 1)
  return [...arr, arr[n - 1] + arr[n - 2]]
}

console.log(fibonacciSequence(5)); // [0, 1, 1, 2, 3, 5]


/*
* The same requirement, implemented with a plain `for` loop
* */
function fibonacciSequenceWithForLoop(n) {
  if (n < 1) {
    return [0];
  }
  let prev = 0;
  let next = 1;
  const arr = [prev, next];
  for (let i = 2; i <= n; i++) {
    arr.push(prev + next);
    [prev, next] = [next, prev + next];
  }
  return arr;
}

console.log(fibonacciSequenceWithForLoop(5)); // [0, 1, 1, 2, 3, 5]
