# 128.Longest Consecutive Sequence

## Problem
Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence*.

You must write an algorithm that runs in **O(n)** time.

___
## Examples

#### Example 1:
**Input:** `nums = [100, 4, 200, 1, 3, 2]`  
**Output:** `4`  
**Explanation:** The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is `4`.

#### Example 2:
**Input:** `nums = [0,3,7,2,5,8,4,6,0,1]`  
**Output:** `9`  
**Explanation:** The longest consecutive elements sequence is `[0,1,2,3,4,5,6,7,8]`. Therefore its length is `9`.

#### Example 3:
**Input:** `nums = [1,2,0,1]`  
**Output:** `3`  
**Explanation:** The longest consecutive elements sequence is `[0,1,2]`. Therefore its length is `3`.

___
## Solution (JS)
We can solve this problem **optimally in O(n)** time using a **Set**.

**Idea:**
1. Put all numbers in a set for O(1) lookups.
2. Iterate through each number:
   - If `num - 1` is not in the set, it means `num` is the start of a sequence.
   - Count consecutive numbers from `num` and update the maximum length.
3. Return the maximum length.

```javascript
var longestConsecutive = function(nums) {
    let set = new Set(nums);
    let maxLen = 0;

    for (let num of set) {
        // Only start counting if `num` is the start of a sequence
        if (!set.has(num - 1)) {
            let current = num;
            let streak = 1;

            while (set.has(current + 1)) {
                current++;
                streak++;
            }

            maxLen = Math.max(maxLen, streak);
        }
    }

    return maxLen;
};

// Example usage:
console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1])); // 9
```

___
## Complexity
- Time Complexity: O(n)
- Time Complexity: O(n)