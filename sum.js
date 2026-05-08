const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");
const button = document.querySelector("button");

let clickedTimes = 0;
let runTimes = 0;

const myDebounce = (func, delay) => {
  let lastRun = 0;

  return function (...args) {
    if (Date.now() - lastRun > delay) {
      lastRun = Date.now();
      func(...args);
    }
  };
};

const throttleFunc = myThrottle(() => {
  run.innerHTML = ++runTimes;
}, 1000);

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  throttleFunc();
});
