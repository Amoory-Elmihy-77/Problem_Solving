# 238. Product of Array Except Self

## Problem
Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in **O(n)** time and **without using the division operation**.

___

## Examples

#### Example 1:
**Input:** `nums = [1,2,3,4]`  
**Output:** `[24,12,8,6]`

#### Example 2:
**Input:** `nums = [-1,1,0,-3,3]`  
**Output:** `[0,0,9,0,0]`

___

## Constraints
- `2 <= nums.length <= 10^5`
- `-30 <= nums[i] <= 30`
- The input is generated such that `answer[i]` is guaranteed to fit in a 32-bit integer.

___

## Solution 1 (Optimal – No Division)
```javascript
var productExceptSelf = function (nums) {
  const n = nums.length;
  const ans = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    ans[i] = leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    ans[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return ans;
};
```
## Solution 2 (Using Division + Zero Handling)
```javascript
var productExceptSelf = function (nums) {
  let totalProduct = 1;
  let totalWithoutZeros = 1;
  let postionOfZeros = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) postionOfZeros.push(i);
    if (postionOfZeros.length > 1) break;
  }

  for (let i = 0; i < nums.length; i++) {
    totalProduct *= nums[i];
    if (nums[i] === 0) continue;
    totalWithoutZeros *= nums[i];
  }

  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (postionOfZeros.length > 1) {
      ans.push(0);
      continue;
    }
    let res = totalProduct / nums[i];
    if (res === -0) res = 0;
    else if (isNaN(res)) res = totalWithoutZeros;
    ans.push(res);
  }

  return ans;
};
```
## Difference Between the Two Solutions
- **Solution 1**: Optimal solution, does not use division, runs in O(n) time and uses O(1) extra space.
- **Solution 2**: Relies on division and additional checks for zeros, making it less optimal.
