# Prefix sum
### Prefix Sum is a technique used to preprocess an array so that range sum queries can be answered in O(1) time.

---
### 1) BASIC IDEA

#### Given an array:
```
arr = [2, 4, 1, 3]
```
#### We build a prefix sum array where:
```
prefix[i] = sum of elements from index 0 to i
```
#### Result:
```
prefix = [2, 6, 7, 10]
```
----------------------------------------------------
### 2) BUILDING PREFIX SUM ARRAY
#### Formula:
```
prefix[0] = arr[0]
prefix[i] = prefix[i - 1] + arr[i]
```
```javascript
function buildPrefixSum(arr) {
  let prefix = new Array(arr.length);

  prefix[0] = arr[0];

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = prefix[i - 1] + arr[i];
  }

  return prefix;
}
```
----------------------------------------------------
### 3) RANGE SUM QUERY
#### We want to find the sum from index L to R.
##### => Formula:
```
If L === 0:
  sum = prefix[R]
Else:
  sum = prefix[R] - prefix[L - 1]
```
### Time Complexity: O(1)

```javascript
function rangeSum(prefix, L, R) {
  if (L === 0) {
    return prefix[R];
  }
  return prefix[R] - prefix[L - 1];
}
```
----------------------------------------------------
### 4) EXAMPLE USAGE
```javascript
let arr = [2, 4, 1, 3];
let prefix = buildPrefixSum(arr);

console.log("Original Array:", arr);
console.log("Prefix Sum Array:", prefix);
// Sum from index 1 to 3 => 4 + 1 + 3 = 8
console.log("Range Sum (1 to 3):", rangeSum(prefix, 1, 3));
```
----------------------------------------------------
### 5) TIME AND SPACE COMPLEXITY
#### Building Prefix Sum:
- Time: O(n)
- Space: O(n)

#### Each Range Query:
- Time: O(1)
----------------------------------------------------
### 6) WHY PREFIX SUM IS IMPORTANT
- Used in range queries
- Used in subarray sum problems
- Used in competitive programming
- Foundation for 2D Prefix Sum
- Frequently asked in interviews
