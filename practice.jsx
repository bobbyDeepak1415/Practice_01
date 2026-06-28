// // Creating a Promise around an old callback API

// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("foo");
//   }, 300);
// });

// promise1.then((value) => {
//   console.log(value);
//   // Expected output: "foo"
// });

// console.log(promise1);
// // Expected output: [object Promise]


const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(0).then(() => console.log(4));
Promise.resolve()
  .then(() => console.log(2))
  .then(() => console.log(3));
console.log(1); // 1, 2, 3, 4