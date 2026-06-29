// 1
// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 0);

// async function ultimate() {
//   console.log("3");
//   await Promise.resolve();
//   console.log("4");
// }

// ultimate();

// new Promise((resolve) => {
//   console.log("5");
//   resolve();
// })
//   .then(() => {
//     console.log("6");
//   })
//   .then(() => {
//     console.log("7");
//   });

// console.log("8");

// -----------------------

// 2.
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
