let test = true;
let counter = 0;
setTimeout(() => {
  test = false;
}, 2000);
setInterval(() => {
  if (test) {
    console.log(counter++);
  }
}, 1000);
