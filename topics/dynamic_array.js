/*************************************************
 * JavaScript Arrays are Dynamic by Default
 *************************************************/

/*
 In JavaScript, arrays are dynamic.
 This means:
 - You do NOT need to define the size in advance
 - You can add or remove elements at any time
*/

// 1) Create a dynamic array
let arr = []; // empty array

// 2) Add elements
arr.push(10); // add one element
arr.push(20, 30); // add multiple elements
console.log(arr); // [10, 20, 30]

// 3) Remove elements
arr.pop(); // removes the last element (30)
console.log(arr); // [10, 20]

arr.shift(); // removes the first element (10)
console.log(arr); // [20]

// 4) Insert an element at a specific index
// splice(index, deleteCount, newElement)
arr.splice(1, 0, 50);
console.log(arr); // [20, 50]

// 5) Dynamic resizing
// Assigning a value beyond current length
arr[5] = 100;
console.log(arr); // [20, 50, <3 empty items>, 100]
console.log(arr.length); // 6

/*************************************************
 * Iterating over an array
 *************************************************/

// Traditional for loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Modern iteration
arr.forEach((element) => {
  console.log(element);
});

// concat two arrays
let arr2 = [1, 2, 3];
let combined = arr.concat(arr2);
console.log(combined); // [20, 50, <3 empty items>, 100, 1, 2, 3]

/*************************************************
 * Creating an array with a predefined size
 *************************************************/

/*
 You can create an array with an initial size
 using the Array constructor.
 NOTE: Elements will be undefined by default.
*/

let size = 5;
let fixedArr = new Array(size);

console.log(fixedArr); // [undefined x 5]
console.log(fixedArr.length); // 5

// Assign values
fixedArr[0] = 10;
fixedArr[1] = 20;
console.log(fixedArr); // [10, 20, undefined, undefined, undefined]

// Initialize all elements with a default value
let filledArr = new Array(5).fill(0);
console.log(filledArr); // [0, 0, 0, 0, 0]

/*************************************************
 * Important Notes
 *************************************************/

/*
 - Even if you define an initial size,
   JavaScript arrays are STILL dynamic.
 - You can always add more elements.
*/

filledArr.push(6);
console.log(filledArr); // [0, 0, 0, 0, 0, 6]

/*
 Summary:
 - JavaScript arrays are dynamic by nature
 - new Array(size) only sets an initial length
 - The array can always grow or shrink
*/

////////////////////////////////////////////////////////////
// Advanced Topic
///////////////////////////////////////////////////////////

/*************************************************
 * Why different runtimes with the same Big-O?
 *************************************************/

/*
 All of the following solutions have the same
 Time Complexity: O(n)

 nums.concat(nums)
 [...nums, ...nums]
 for-loop copying

 However, the measured runtime on LeetCode is different.
 This difference is NOT related to the algorithm itself.
*/

/*************************************************
 * Why concat() is the fastest (0ms)?
 *************************************************/

/*
 concat() is implemented as a native function
 inside the JavaScript engine (V8).

 This means:
 - It is written in optimized C++ code
 - It runs below the JavaScript layer
 - It can pre-allocate memory
 - It can copy elements in bulk
 - It may use low-level optimizations (SIMD)

 Result:
 concat() is usually faster than manual loops.
*/

var exampleConcat = function (nums) {
  return nums.concat(nums);
};

/*************************************************
 * Why spread operator is slightly slower (1ms)?
 *************************************************/

/*
 Spread operator is also native, but:
 - It iterates over the array using an iterator
 - Elements are expanded one by one
 - Still optimized, but not as fast as concat()

 Result:
 Slightly slower than concat, but still O(n).
*/

var exampleSpread = function (nums) {
  return [...nums, ...nums];
};

/*************************************************
 * Why the traditional for-loop is slower (≈5ms)?
 *************************************************/

/*
 The for-loop runs entirely in the JavaScript layer.

 For each iteration:
 - Condition is checked
 - Counter is incremented
 - Bounds are validated
 - Array write happens dynamically


/*************************************************
 * Important Note about LeetCode Runtime
 *************************************************/

/*
 LeetCode runtime values:
 - Are not stable
 - Can change between submissions
 - Depend on server load
 - Depend on input size
 - Depend on engine optimizations

 Therefore:
 0ms does NOT mean a better algorithm
 5ms does NOT mean a worse algorithm

 Big-O Complexity is what really matters.
*/

/*************************************************
 * Final Summary
 *************************************************/

/*
 All solutions:
 Time Complexity  -> O(n)
 Space Complexity -> O(n)

 Runtime differences come from:
 - Native engine optimizations
 - Execution layer (C++ vs JavaScript)

 In interviews:
 Big-O analysis is more important than raw runtime.
*/
