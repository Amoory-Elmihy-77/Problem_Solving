# Encode and Decode Strings

## Problem

Design an algorithm to encode a list of strings into a single string. The encoded string is then sent over the network and decoded back to the original list of strings.

* Machine 1 (Sender) encodes the list of strings.
* Machine 2 (Receiver) decodes the received string back to the original list.

The decoded list must be **exactly the same** as the original list.

---

## Examples

#### Example 1:

**Input:** `["Hello", "World"]`

**Output:** `["Hello", "World"]`

**Explanation:**

* Machine 1 encodes the list into a single string.
* The encoded string is sent over the network.
* Machine 2 decodes it back to the original list.

#### Example 2:

**Input:** `[""]`

**Output:** `[""]`

---

## Constraints

* `0 <= strs.length < 100`
* `0 <= strs[i].length < 200`
* `strs[i]` contains any of the 256 valid ASCII characters.

---

## Solution (JS)

`length-based encoding`

```javascript
class Solution {
    encode(strs) {
        let res = "";
        for (let i = 0; i < strs.length; i++) {
            res += strs[i].length + "#" + strs[i];
        }
        return res;
    }

    decode(str) {
        let res = [];
        let i = 0;

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            let len = Number(str.slice(i, j));
            let word = str.slice(j + 1, j + 1 + len);
            res.push(word);

            i = j + 1 + len;
        }

        return res;
    }
}
```

---

## Complexity

* Time Complexity: O(n)
* Space Complexity: O(n)

---

## Notes

* This approach works with **any characters**, including special symbols and empty strings.
* It avoids ambiguity by storing the length of each string before its content.
* This is a safe and network-friendly serialization technique.
