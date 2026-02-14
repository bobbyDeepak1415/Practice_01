console.log("A");
async function test() {
  console.log("B");
  Promise.resolve();
  console.log("C");
  await Promise.resolve();
  console.log("D");
}
test();
Promise.resolve().then(() => console.log("E"));
setTimeout(() => console.log("F"), 0);
console.log("G");


// A,B,C,G,D,E,F