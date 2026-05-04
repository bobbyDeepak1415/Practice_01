// console.log("A");
// async function test() {
//   await Promise.resolve();
//   console.log("B");

//   await Promise.resolve().then(() => console.log("C"));
//   await Promise.resolve();
//   console.log("D");
// }
// test();
// Promise.resolve().then(() => console.log("E"));
// setTimeout(() => console.log("F"), 0);
// console.log("G");

let nums = [56, 5, 4, 3, 7, 98, 12];

function sortNums(nums) {
  return nums;
}

console.log(sortNums(nums));

// console.log(nums.sort((a,b)=>a-b))
