const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");
const btn = document.querySelector("button");

let clickedTimes = 0;
let runTimes = 0;

const myThrottle = (func, delay) => {
  let lastRun=new Date().toString()

  return function (...args) {
     
};

const throttleFunc = myThrottle(() => {
  run.innerHTML = ++runTimes;
}, 1000);

btn.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  throttleFunc();
});

