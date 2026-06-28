console.log("Alpha");

new Promise((resolve) => {
  console.log("Beta");
  resolve();
}).then(() => {
  console.log("Gamma");
});

setTimeout(() => {
  console.log("Delta");

  new Promise((resolve) => {
    console.log("Epsilon");
    resolve();
  }).then(() => {
    console.log("Zeta");
  });
}, 0);

console.log("Eta");

