class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  remove(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
      this.size--;
    }
  }
  print() {
    let current = this.head;
    let result = "";

    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }

    console.log(result + "null");
  }
}

const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

list.prepend(5);

list.print();
// 5 -> 10 -> 20 -> 30 -> null

list.remove(20);
list.print();
// 5 -> 10 -> 30 -> null
