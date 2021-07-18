const strings = ['a', 'b', 'c', 'd'];

strings[3]  //O(1) -> access

strings.push('e')  //O(1)

strings.pop()  //O(1)

strings.unshift('x') //O(n)

strings.splice(2, 0, 'alien')  //O(n) -> add 'alien' to 'strings' array.

console.log(strings)

// Types of array

// 1) Static Array
//   - Fixed Array Size
// 2) Dynamic Array
//  - Dynamic Array Size

// Build an Array:

class CustomArray {
  constructor() {
    this.length = 0;
    this.data = {}
  }

  get(index) {
    return this.data[index]
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i= index; i < this.length;i++) {
      this.data[i] = this.data[i+1]
    }
    this.data[this.length - 1]
  }
}

const newArray = new CustomArray();
console.log(newArray.push('a'))
console.log(newArray.push('b'))
console.log(newArray.pop())
console.log(newArray.get(0))

//cons
// slow inserts, slow deletes, fixed size 

//pros
//  fast lookups, fast push/pop, ordered