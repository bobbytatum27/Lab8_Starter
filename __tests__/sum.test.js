// sum.test.js
let sum_module = require('../assets/scripts/sum');

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum_module.sum(1,2)).toBe(3);
});