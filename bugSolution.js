function foo(a, b) {
  //Type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both inputs must be numbers');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

function bar(a, b) {
  //Type conversion
  return Number(a) + Number(b);
}

console.log(bar(1, '2')); // Output: 3