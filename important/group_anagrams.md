# 49. Group Anagrams
## Problem
Given an array of strings ```strs```, group the *anagrams* together. You can return the answer in any order.
___
## Examples
#### Example 1:

**Input:** ```strs = ["eat","tea","tan","ate","nat","bat"]```

**Output:** ```[["bat"],["nat","tan"],["ate","eat","tea"]]```

**Explanation:** 
- There is no string in strs that can be rearranged to form ```"bat"```.
- The strings ```"nat"``` and ```"tan"``` are anagrams as they can be rearranged to form each other.
- The strings ```"ate"```, ```"eat"```, and ```"tea"``` are anagrams as they can be rearranged to form each other.

#### Example 2:
**Input:** ``` strs = [""]```

**Output:** ```[[""]]```
#### Example 3:

**Input:** ``` strs = ["a"]```

**Output:** ```[["a"]]```

___
## Solution (JS)
```hash map```
```javascript
var groupAnagrams = function (strs) {
  const map = new Map();
  for (let s of strs) {
    const key = s.split("").sort().join("");
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(s);
  }

  let res = [];
  map.forEach((value) => {
    res.push(value);
  });

  return res;
  // return Array.from(map.values());
};
```
___
## Complexity
- Time Complexity: O(n * k log k) or O(n * k)
- Time Complexity: O(n * k)