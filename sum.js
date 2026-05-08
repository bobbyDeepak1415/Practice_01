const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");
const btn = document.querySelector("button");

let clickedTimes = 0;
let runTimes = 0;

const myDebounce = (func, delay) => {
  let timer = 0;

  return function (...args) {
    setTimeout(() => {
      clearTimeout(timer);
      func(...args);
    }, delay);
  };
};

const debounceFunc = myDebounce(() => {
  run.innerHTML = ++runTimes;
}, 1000);

btn.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  debounceFunc();
});
