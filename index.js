// debounce

const btn = document.querySelector("button");
const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");

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

const debounce = myDebounce(() => {
  run.innerHTML = ++runTimes;
}, 1200);

document.addEventListener("click", () => {
  clicked.innerHTML = ++clickedTimes;
  debounce();
});
