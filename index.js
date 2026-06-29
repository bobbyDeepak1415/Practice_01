// console.log("A");
// async function test() {
//   await Promise.resolve(); 1
//   console.log("B");

//   await Promise.resolve().then(() => console.log("C")); 2
//   await Promise.resolve();
//   console.log("D");
// }
// test();
// Promise.resolve().then(() => console.log("E"));
// setTimeout(() => console.log("F"), 0);
// console.log("G");



// A,G,B,D,E,C,F