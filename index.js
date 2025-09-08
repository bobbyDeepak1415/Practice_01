// debounce

const input = document.querySelector("input");
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

const debounceFunction = myDebounce(() => {
  run.innerHTML = ++runTimes;
}, 1000);

input.addEventListener("input", () => {
  clicked.innerHTML = ++clickedTimes;
  debounceFunction();
});
