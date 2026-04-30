// console.log("A");
// async function test() {
//   console.log("B");

//   Promise.resolve().then(()=>console.log("C"))
//  await Promise.resolve()
//   console.log("D");

// }
// test();
// Promise.resolve().then(() => console.log("E"));
// setTimeout(() => console.log("F"), 0);
// console.log("G");

// const fruits = ["apple", "banana", "apple"];

let str = "AABBBCDAADEEEEEA";

function display() {
  let obj = {};

  let result = "";

  for (let i of str) {
    obj[i] = (obj[i] || 0) + 1;
  }

  for (let i of str) {
    result= i + obj[i];
  }

  return result
}


console.log(display(str))
