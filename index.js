const button = document.querySelector("button");
const btnClicked = document.querySelector(".clicked");
const functionRun = document.querySelector(".func_run");

let clickedTimes = 0;
let runTimes = 0;

const myThrottle = (func, delay) => {
  let lastRun = 0;
  return function (...args) {
    let now = Date.now();
    if (now - lastRun >= delay) {
      lastRun = now;
      func(...args);
    }
  };
};

const funcThrottle = myThrottle(() => {
  functionRun.innerHTML = ++runTimes;
}, 800);
button.addEventListener("click", () => {
  btnClicked.innerHTML = ++clickedTimes;
  funcThrottle();
});
