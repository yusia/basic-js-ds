const { NotImplementedError } = require('../extensions/index.js');

//  const stack = new Stack();

//   stack.push(1); // adds the element to the stack
//   stack.peek(); // returns the peek, but doesn't delete it, returns 1
//   stack.pop(); // returns the top element from stack and deletes it, returns 1
//   stack.pop(); // undefined
 

class Stack {
  constructor(stack) {
    if(stack) this.stack = stack;
    else this.stack = [];
  }
  push( element ) {
    this.stack.unshift(element)
  }

  pop() { 
    if(this.stack.length!==0) return this.stack.shift();
   return undefined;
  }

  peek() {
    if(this.stack.length!==0) return this.stack[0];
    return undefined;   
  }
}

module.exports = {
  Stack
};
