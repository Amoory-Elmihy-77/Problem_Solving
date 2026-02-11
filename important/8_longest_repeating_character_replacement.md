# 424. Longest Repeating Character Replacement

## Problem

You are given a string `s` and an integer `k`.  
You can choose any character of the string and change it to any other uppercase English character.  
You can perform this operation at most `k` times.  

Return the length of the longest substring containing the same letter you can get after performing the above operations.

---

## Examples

#### Example 1:

**Input:** `s = "ABAB", k = 2`  
**Output:** `4`  

**Explanation:** Replace the two 'A's with two 'B's or vice versa. The substring `"BBBB"` or `"AAAA"` has length 4.

#### Example 2:

**Input:** `s = "AABABBA", k = 1`  
**Output:** `4`  

**Explanation:** Replace the one 'A' in the middle with 'B' to form `"AABBBBA"`. The substring `"BBBB"` has the longest repeating letters.

---

## Solution (JS)

```javascript
var characterReplacement = function(s, k) {
    let freq = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let index = s.charCodeAt(right) - 65;
        freq[index]++;
        maxFreq = Math.max(maxFreq, freq[index]);

        while ((right - left + 1) - maxFreq > k) {
            freq[s.charCodeAt(left) - 65]--;
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};

// Test
console.log(characterReplacement("ABAB", 2)); // 4
console.log(characterReplacement("AABABBA", 1)); // 4
```
---
## Complexity

* **Time Complexity:** O(n) — single pass through the string using two pointers.
* **Space Complexity:** O(26) ≈ O(1) — frequency array for uppercase English letters.