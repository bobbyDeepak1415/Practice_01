// Creating a Promise around an old callback API

const promise = new Promise((resolve, reject) => {
  console.log("Promise callback"); //1
  setTimeout(() => {
    resolve();
  }, 1000);
}).then((result) => {
  console.log("Promise callback (.then)"); //4
});

setTimeout(() => {
  console.log("event-loop cycle: Promise (fulfilled)"); //3
}, 0);

console.log("Promise (pending)",);//2
