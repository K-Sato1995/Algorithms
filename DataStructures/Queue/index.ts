// Queue = FIFO(First In First Out)

// https://www.geeksforgeeks.org/implementation-queue-javascript/
class Queue {
  items: number[]

  constructor() {
    this.items = []
  }

  add(item: number) {
    this.items.push(item)
  }

  remove() {
    return this.items.shift()
  }

  peek() {
    return this.items[0]
  }

  isEmpty() {
    const length = this.items.length
    return length === 0
  }
}
