const btn = document.querySelector("button");
const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");

let clickedTimes = 0;
let runTimes = 0;

const myThrottle = (func, delay) => {
  let lastRun = 0;

  return function () {
    let timeNow = Date.now();
    if (timeNow - lastRun > delay) {
      lastRun = timeNow;
      func();
    }
  };
};

const ThrottleFunc = myThrottle(() => {
  run.innerHTML = runTimes++;
}, 1200);

btn.addEventListener("click", () => {
  clicked.innerHTML = clickedTimes++;
  ThrottleFunc();
});
