# 11. Container With Most Water

## Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Notice:** you may not slant the container.

---

## Examples

#### Example 1:

**Input:** `height = [1,8,6,2,5,4,8,3,7]`
**Output:** `49`

**Explanation:** The above vertical lines are represented by array `[1,8,6,2,5,4,8,3,7]`. The max area of water the container can contain is `49`.

#### Example 2:

**Input:** `height = [1,1]`
**Output:** `1`

---

## Solution (JS)

```javascript
var maxArea = function (height) {
  let maxW = 0;
  let l = 0,
      r = height.length - 1;
  while (l < r) {
    let water = (r - l) * Math.min(height[l], height[r]);
    maxW = Math.max(maxW, water);
    if (height[r] < height[l]) r--;
    else l++;
  }
  return maxW;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1
```

---

## Complexity

* **Time Complexity:** O(n) — single pass through the array using two pointers.
* **Space Complexity:** O(1) — no extra space used.
