const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");
const button = document.querySelector("button");

let clickedTimes = 0;
let runTimes = 0;

const myDebounce = (func, delay) => {
  let timer = 0;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounceFunc = myDebounce(() => {
  run.innerHTML = ++runTimes;
}, 1000);

button.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  debounceFunc()
});
