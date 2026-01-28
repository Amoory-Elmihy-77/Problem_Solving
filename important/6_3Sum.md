# 15. 3Sum

## Problem

Given an integer array `nums`, return *all the triplets* `[nums[i], nums[j], nums[k]]` such that:

* `i != j`, `i != k`, and `j != k`
* `nums[i] + nums[j] + nums[k] == 0`

Notice that the solution set must **not contain duplicate triplets**.

---

## Examples

#### Example 1:

**Input:** `nums = [-1,0,1,2,-1,-4]`

**Output:** `[[-1,-1,2],[-1,0,1]]`

**Explanation:**

* `-1 + -1 + 2 = 0`
* `-1 + 0 + 1 = 0`

#### Example 2:

**Input:** `nums = [0,1,1]`

**Output:** `[]`

#### Example 3:

**Input:** `nums = [0,0,0]`

**Output:** `[[0,0,0]]`

---

## Approach

**Sorting + Two Pointers**

1. Sort the array.
2. Fix one element `nums[i]`.
3. Use two pointers:

   * `l` starting from `i + 1`
   * `r` starting from the end of the array
4. Move pointers based on the sum.
5. Skip duplicates to avoid repeated triplets.

---

## Solution (JS)

`two pointers`

```javascript
var threeSum = function (nums) {
  let res = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let l = i + 1;
    let r = nums.length - 1;

    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];

      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);

        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;

        l++;
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        r--;
      }
    }
  }

  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
```

---

## Complexity

* **Time Complexity:** `O(n^2)`
* **Space Complexity:** `O(1)` (excluding output array)
