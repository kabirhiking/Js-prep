function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  }
}
const counter = outer();
counter(); // 1
counter(); // 2

//closure is a function that has access to its own scope, the outer function's scope, and the global scope.
// In this example, the inner function has access to the count variable defined in the outer function's scope, even after the outer function has finished executing.
// This is because the inner function forms a closure around the outer function's scope.