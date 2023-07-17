/**
 * Direction:
 * Swap these numbers without using temporary variable
 *
 * Expected Result:
 * {
 *  a: 4,
 *  b: 2
 * }
 */
let numbers = {
  a: 2,
  b: 4,
};

function result(numbers) {
  // Your Code Here
  numbers.a = numbers.a + numbers.b; // a = 6
  numbers.b = numbers.a - numbers.b; // b = 6-4 = 2
  numbers.a = numbers.a - numbers.b; // a = 6-2 = 4
  return numbers;
}

console.log(result(numbers));
