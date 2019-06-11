// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!


function minusMaker(minusNumber) {
  let result;
  function minus(firstNumber) {

    return result = firstNumber - minusNumber;
  }

  return minus;

}

const minus5 = minusMaker(5);

console.log(minus5(7));
console.log(minus5(59));







/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
function counter() {
  let number = 0;
  function add1() {
    return ++number;

  }
  return add1;
};
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
};
