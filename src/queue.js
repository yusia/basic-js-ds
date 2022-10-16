const { NotImplementedError } = require("../extensions/index.js");

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = null;
    this.last = {};
  }
  isEmpty() {
    return this.queue ===null;
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let newEl = new ListNode(value);

    if (this.isEmpty()) {
      this.queue = newEl;
      this.last = newEl;
    } else {
      if(this.queue.next===null){
        this.queue.next= newEl;
      }
      this.last.next = newEl;
      this.last = newEl;
    }
  }

  dequeue() {
    let prevHead = this.queue;
    this.queue = this.queue.next;
    return prevHead.value;
  }
}

module.exports = {
  Queue,
};
