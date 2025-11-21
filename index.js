


const input = document.querySelector("input");
const functionClicked = document.querySelector(".clicked");
const functionRun = document.querySelector(".func_run");

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

const functionDebounce = myDebounce(() => {
  functionRun.innerHTML = ++runTimes;
}, 1000);

input.addEventListener("input", () => {
  functionClicked.innerHTML = ++clickedTimes;
  functionDebounce();
});
