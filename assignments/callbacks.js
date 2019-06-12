// Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



//Given this problem: 

//function firstItem(arr, cb) {
// firstItem passes the first item of the given array to the callback function.
//

// Potential Solution:

// Higher order function using "cb" as the call back

const pets = ['cat', 'dog', 'mouse', 'bird', 'mouse'];



function firstItem(arr, cb) {
  return cb(arr[0]);
}

// Function invocation 
firstItem(pets, function (first) {
  console.log(first)
});



function getLength(arr, cb) {
  cb(arr.length);
}
getLength(pets, (length) => {
  console.log(length);
});



function last(arr, cb) {
  cb(arr[arr.length - 1]);
}

last(pets, (last) => {
  console.log(last);
})


function sumNums(x, y, cb) {
  cb(x + y);
}

sumNums(5, 10, function (total) {
  console.log(total);
})


function multiplyNums(x, y, cb) {
  cb(x * y);
}

multiplyNums(5, 6, function (product) {
  console.log(product);
})


function contains(item, list, cb) {
  cb(list.indexOf(item) !== -1);
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

contains('bird', pets, function (boolean) {
  console.log(boolean);
})



/* STRETCH PROBLEM */

function removeDuplicates(array, cb) { /* got help from https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array */
  cb(uniqueArray = array.filter(function(item, pos, self) {
    return self.indexOf(item) === pos;
  }))
}

removeDuplicates(pets, function(uniqueArr) {
  console.log(uniqueArr);
})