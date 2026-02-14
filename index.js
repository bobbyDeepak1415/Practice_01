console.log("A");
async function test() {
  console.log("B");
  await Promise.resolve();
  console.log("C");
  await Promise.resolve();
  console.log("D");
}
test();
Promise.resolve().then(() => console.log("E"));
setTimeout(() => console.log("F"), 0);
console.log("G");

// (A, G, B, C, D, E, F);