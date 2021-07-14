const performance = require('perf_hooks').performance;

// const minion = ["minion"];
// const everyone = ["valan", "anto", "amal", "johny", "harish", "joseph", "daniel"]
const large = new Array(10000).fill('minion')

function findMinion(array) {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "minion") {
            return console.log("Found Minion")
        }
    }
    let t1 = performance.now()

    console.log(`Time taken: ${t1- t0} milliseconds`)
}

findMinion(large) // O(n) --> linear time

function logFirstTwoBoxes(boxes) {
  console.log(boxes[0]) // O(1)
  console.log(boxes[1]) // O(1)
}

logFirstTwoBoxes([0,1,2,3,4,5])   // O(2) --> constant time

function challenge(input) {
  let a = 10 // O(1)
  a = 50 + 3 // O(1)

  for(let i=0; i< input.length; i++) {
    anotherFunction(); // O(n)
    let stranger = true // O(n)
    a++ // O(n)
  }

  return a; // O(1)
}

challenge(10) // Big O (3 + 4n) --> O(n) ---> Remove constants.

function printBoxes(boxes, boxes2) {
  boxes.forEach(box => console.log(box))
  boxes2.forEach(box => console.log(box))
}     

printBoxes([1,2,3,4,5], [1,2,3,4,5,6,7,8,9,10,11]) // Big O(a + b) --> different terms for inputs


// Space Complexity

function print(n) {
  for(let i=0;i<n.length;i++) {
    console.log("hii")
  }
}

print([1,2,3,4,5]) // space Complexity --> O(1)

function arrayOfHiTimes(n) {
  let hiArray = [];
  for(let i=0;i<n;i++) {
    hiArray[i] = "hi";
  }
  return hiArray;
}

arrayOfHiTimes(6) // space Complexity --> O(n)

