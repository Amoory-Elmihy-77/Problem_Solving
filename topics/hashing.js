/*
=====================================
1) WHAT IS HASHING?
=====================================

Hashing is a technique used in data structures to store and retrieve
elements efficiently using a hash function.

The main idea:
Key  ---> Hash Function ---> Index (in an array)

Hashing is mainly used to achieve:
- Fast insertion
- Fast search
- Fast deletion

Average time complexity: O(1)
Worst case time complexity: O(n)
*/

/*
=====================================
2) HASH FUNCTION
=====================================

A hash function maps a key to an index in the hash table.

A good hash function should:
- Be deterministic (same input -> same output)
- Distribute keys uniformly
- Minimize collisions
*/

function hashFunction(key, tableSize) {
  return key % tableSize;
}

/*
=====================================
3) HASH TABLE STRUCTURE
=====================================

A hash table is basically:
- An array
- A hash function
*/

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }
}

/*
=====================================
4) COLLISION
=====================================

A collision occurs when two different keys produce the same index.

Example:
tableSize = 10
hash(15) = 5
hash(25) = 5

Both keys want to be stored at index 5.
*/

/*
=====================================
5) COLLISION RESOLUTION TECHNIQUES
=====================================

We will cover:
1) Chaining
2) Open Addressing
3) Replacement Method
*/

/*
=====================================
5.1) CHAINING
=====================================
*/

class HashTableChaining {
  constructor(size) {
    this.size = size;
    this.table = Array.from({ length: size }, () => []);
  }

  insert(key) {
    const index = hashFunction(key, this.size);
    this.table[index].push(key);
  }

  search(key) {
    const index = hashFunction(key, this.size);
    return this.table[index].includes(key);
  }
}

/*
=====================================
5.2) OPEN ADDRESSING (LINEAR PROBING)
=====================================
*/

class HashTableLinearProbing {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  insert(key) {
    let index = hashFunction(key, this.size);

    while (this.table[index] !== null) {
      index = (index + 1) % this.size;
    }

    this.table[index] = key;
  }

  search(key) {
    let index = hashFunction(key, this.size);

    while (this.table[index] !== null) {
      if (this.table[index] === key) return true;
      index = (index + 1) % this.size;
    }

    return false;
  }
}

/*
=====================================
5.3) OPEN ADDRESSING (QUADRATIC PROBING)
=====================================
*/
class HashTableQuadraticProbing {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }
  insert(key) {
    let index = hashFunction(key, this.size);
    let i = 0;
    while (this.table[index] !== null) {
      i++;
      index = (index + i * i) % this.size;
    }
    this.table[index] = key;
  }
  search(key) {
    let index = hashFunction(key, this.size);
    let i = 0;
    while (this.table[index] !== null) {
      if (this.table[index] === key) return true;
      i++;
      index = (index + i * i) % this.size;
    }
    return false;
  }
}
/*
=====================================
5.4) REPLACEMENT METHOD (IMPORTANT)
=====================================

Replacement is a collision resolution technique used with open addressing.

Idea:
- If a collision occurs
- Check whether the existing element at the index
  belongs to that index (home position) or not
- If it does NOT belong there, replace it

This reduces search time for displaced elements.
*/

class HashTableReplacement {
  constructor(size) {
    this.size = size;
    this.table = new Array(size).fill(null);
  }

  insert(key) {
    let index = hashFunction(key, this.size);

    // If slot is empty, insert directly
    if (this.table[index] === null) {
      this.table[index] = key;
      return;
    }

    // Collision occurred
    const existingKey = this.table[index];
    const existingKeyHome = hashFunction(existingKey, this.size);

    // If existing key does NOT belong here, replace it
    if (existingKeyHome !== index) {
      this.table[index] = key;
      key = existingKey;
    }

    // Find next available slot for displaced key
    let newIndex = (index + 1) % this.size;
    while (this.table[newIndex] !== null) {
      newIndex = (newIndex + 1) % this.size;
    }

    this.table[newIndex] = key;
  }

  search(key) {
    let index = hashFunction(key, this.size);

    while (this.table[index] !== null) {
      if (this.table[index] === key) return true;
      index = (index + 1) % this.size;
    }

    return false;
  }
}

/*
=====================================
8) TIME COMPLEXITY SUMMARY
=====================================

Operation     Average Case     Worst Case
-----------------------------------------
Search        O(1)             O(n)
Insert        O(1)             O(n)
Delete        O(1)             O(n)

Worst case happens when many collisions occur.
*/

/*
=====================================
9) IMPORTANT NOTES FOR EXAMS / INTERVIEWS
=====================================

- Hashing does NOT guarantee O(1) in all cases
- Collision handling is mandatory
- Replacement method improves search efficiency
- Hash tables are NOT suitable for ordered data
*/

/*=====================================
10) Hash Set and Hash Map
=====================================
*/

let myHashSet = new Set([1, 2, 3, 4, 3]);
myHashSet.add(5); // Add element
console.log(myHashSet.has(3)); // Check existence
myHashSet.delete(2); // Remove element
console.log(myHashSet);
// Output: Set { 1, 3, 4, 5 }

let myHashMap = new Map();
myHashMap.set("a", 1); // Set key-value pair
myHashMap.set("b", 2);
console.log(myHashMap.get("a")); // Get value by key
myHashMap.delete("b"); // Remove key-value pair
console.log(myHashMap);
// Output: Map { 'a' => 1 }
