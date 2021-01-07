// Stack = LIFO(Last In First Out)

// 配列と異なり、i番目の要素に一定時間でアクセスすることは出来ない。
// しかし、シフト操作は必要ないので、追加と削除は一定時間で可能である。

// Stack
// https://www.geeksforgeeks.org/implementation-stack-javascript/
class Stack {
  items: number[]

  constructor() {
    this.items = []
  }

  push(value: number) {
    this.items.push(value)
  }

  pop() {
    return this.items.pop()
  }

  //Peek() : returns the top most elements in the stack, but doesn’t delete it.
  peek() {
    const lengh = this.items.length
    return this.items[lengh - 1]
  }

  isEmpty() {
    return this.items.length === 0
  }
}
