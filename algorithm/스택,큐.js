
//스택(stack) & 큐(Queue)

//스택: 택배 상하차. 가장 마지막에 들어온 데이터가 가장 먼저 처리되는 것.
//큐: 은행 창구 (들어온 순서대로.. 선입선출?)



// stack 구현 에제
class Stack {
  constructor() {
    this.arr = [];
    this.index = 0;
  }
  push(item) {
    this.arr[this.index++] = item;
  }
  pop() {
    if (this.index <= 0) return null;
    const result = this.arr[--this.index];
    return result;
  }
  peek() {
    return this.arr[this.arr.length-1];
  }
}

let stack = new Stack();
stack.push(1); // arr: [1], index: 1
stack.push(2); // arr: [1, 2], index: 2
stack.push(3); // arr: [1, 2, 3], index: 3
console.log(stack.pop()); // 3 , index: 2
console.log(stack.pop()); // 2 , index: 1
console.log(stack.pop()); // 1 , index: 0
console.log(stack.pop()); // null
console.log(stack.top());


