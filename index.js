const input = document.querySelector("input");
const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");

let typedTimes = 0;
let runTimes = 1;

const myDebounce = (func, delay) => {
  let timer = 0;
  return function () {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func();
    }, delay);
  };
};

const debounceFunc = myDebounce(() => {
  run.innerHTML = runTimes++;
}, 1200);

input.addEventListener("input", () => {
  clicked.innerHTML = typedTimes++;
  debounceFunc();
});
