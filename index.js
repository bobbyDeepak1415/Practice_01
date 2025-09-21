const input = document.querySelector("button");
const clicked = document.querySelector(".clicked");
const func_Run = document.querySelector(".func_run");

let clickedTimes = 0;
let functionRunTimes = 0;

const myThrottle = (func, delay) => {
  let lastRun = 0;
  return function (...args) {
    let now = Date.now();

    if (now - lastRun > delay) {
      lastRun = now;
      func(...args);
    }
  };
};

const functionThrottle = myThrottle(() => {
  func_Run.innerHTML = ++functionRunTimes;
}, 1200);

document.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  functionThrottle();
});
