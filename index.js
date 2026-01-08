const a = 10;
console.log(a);

setTimeout(() => {
  console.log("timeout");

  Promise.resolve().then(() => {
    console.log("promise");
  });
}, 0);

console.log("end");


// 10,end,timeout,promise