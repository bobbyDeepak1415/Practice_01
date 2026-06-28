// // // Creating a Promise around an old callback API

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

// const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// ************************************************************************************************8

//// Dont open terminal before guessing. first look at the chat in gemini and then revise and then guess

const promise = new Promise((resolve, reject) => {
  console.log("Promise callback"); 

})