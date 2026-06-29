console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

async function ultimate() {
  console.log("3");
  await Promise.resolve();
  console.log("4");
}

ultimate();

new Promise((resolve) => {
  console.log("5");
  resolve();
})
  .then(() => {
    console.log("6");
  })
  .then(() => {
    console.log("7");
  });

console.log("8");


// macro- 
// micro-



// sync-