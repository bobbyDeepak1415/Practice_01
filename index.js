const input = document.querySelector("input");
const typed = document.querySelector(".typed");
const func_Run = document.querySelector(".func_run");

let typedTimes = 0;
let functionRunTimes = 0;

const myDebounce = (func,delay) => {
  let timer = 0;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

const debounceFunc = myDebounce(() => {
  func_Run.innerHTML = ++functionRunTimes;
}, 1200);

document.addEventListener("input", () => {
  typed.innerHTML = ++typedTimes;
  debounceFunc();
});
