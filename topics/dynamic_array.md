# JavaScript Arrays: Dynamic Nature & Performance Insights

---

## 1. JavaScript Arrays are Dynamic by Default

In JavaScript, arrays are dynamic. This means:  

- You do **NOT** need to define the size in advance.  
- You can add or remove elements at any time.  

### Create a Dynamic Array

```javascript
let arr = []; // empty array
```
#### Add Elements
```javascript
arr.push(10); // add one element
arr.push(20, 30); // add multiple elements
console.log(arr); // [10, 20, 30]
```
#### Remove Elements
```javascript
arr.pop(); // removes the last element (30)
console.log(arr); // [10, 20]

arr.shift(); // removes the first element (10)
console.log(arr); // [20]
```
#### Insert an Element at a Specific Index
```javascript
arr.splice(1, 0, 50);
console.log(arr); // [20, 50]
```
#### Dynamic Resizing

##### Assigning a value beyond current length:
```javascript
arr[5] = 100;
console.log(arr); // [20, 50, <3 empty items>, 100]
console.log(arr.length); // 6
```
## 2. Iterating over an Array
##### Traditional For Loop
```javascript
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
##### Modern Iteration (forEach)
```javascript
arr.forEach((element) => {
  console.log(element);
});
```
##### Concatenate Two Arrays
```javascript
let arr2 = [1, 2, 3];
let combined = arr.concat(arr2);
console.log(combined); // [20, 50, <3 empty items>, 100, 1, 2, 3]
```
## 3. Creating an Array with a Predefined Size

##### You can create an array with an initial size using the Array constructor.
##### => Note: Elements will be undefined by default.
```javascript
let size = 5;
let fixedArr = new Array(size);

console.log(fixedArr); // [undefined x 5]
console.log(fixedArr.length); // 5
```
##### Assign Values
```javascript
fixedArr[0] = 10;
fixedArr[1] = 20;
console.log(fixedArr); // [10, 20, undefined, undefined, undefined]
```
##### Initialize All Elements with a Default Value
```javascript
let filledArr = new Array(5).fill(0);
console.log(filledArr); // [0, 0, 0, 0, 0]
```
### Important Note

#### Even if you define an initial size, JavaScript arrays are still dynamic.
##### You can always add more elements:
```javascript
filledArr.push(6);
console.log(filledArr); // [0, 0, 0, 0, 0, 6]
```

### Summary:

##### JavaScript arrays are dynamic by nature.

##### new Array(size) only sets an initial length.

##### The array can always grow or shrink.

## 4. Advanced Topic: Runtime Differences in JavaScript Arrays
### Why Different Runtimes with the Same Big-O?

#### All of the following solutions have the same Time Complexity: O(n)
```
nums.concat(nums)

[...nums, ...nums]

For-loop copying
```
##### However, the measured runtime on LeetCode may differ.
##### This difference is NOT related to the algorithm itself.

#### Why concat() is the Fastest (0ms)?
```
concat() is implemented as a native function inside the JavaScript engine (V8).

Written in optimized C++ code

Runs below the JavaScript layer

Can pre-allocate memory

Can copy elements in bulk

May use low-level optimizations (SIMD)
```
```javascript
var exampleConcat = function (nums) {
  return nums.concat(nums);
};
```
#### Why Spread Operator is Slightly Slower (1ms)?
```
The spread operator is also native, but:

Iterates over the array using an iterator

Expands elements one by one

Still optimized, but not as fast as concat()
```
```javascript
var exampleSpread = function (nums) {
  return [...nums, ...nums];
};
```
#### Why the Traditional For-Loop is Slower (≈5ms)?
```
The for-loop runs entirely in the JavaScript layer.

For each iteration:

Condition is checked

Counter is incremented

Bounds are validated

Array write happens dynamically
```
### Important Note:
```
LeetCode runtime values:

Are not stable

Can change between submissions

Depend on server load

Depend on input size

Depend on engine optimizations
```
#### Therefore:
```
0ms does NOT mean a better algorithm

5ms does NOT mean a worse algorithm

Big-O Complexity is what really matters.
```
## 5. Final Summary
```
All solutions:

Time Complexity → O(n)

Space Complexity → O(n)

```
## Runtime differences come from:
```
Native engine optimizations

Execution layer (C++ vs JavaScript)

In interviews: Big-O analysis is more important than raw runtime.
```