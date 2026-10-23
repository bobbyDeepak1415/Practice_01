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



// interview

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i); //1
//   }, 0);
 
//   Promise.resolve().then(() => {
//     console.log("P", i); //2
//   });
// }
 
// console.log("End"); //3


// End, "p",3, 3



// for (var i = 0; i <=3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 100);}
  
//   output: 3
