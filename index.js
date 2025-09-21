const input = document.querySelector("input");
const typed = document.querySelector(".typed");
const func_Run = document.querySelector(".func_run");

let typedTimes = 0;
let functionRunTimes = 0;

const myDebounce = (...args) => {
  let timer = 0;
  return function (...delay) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func_Run(...args);
    }, delay);
  };
};

const debounceFunc =
  (() => {
    func_Run.innerHTML = functionRunTimes++;
  },
  1200);

document.addEventListener("input", () => {
  typed.innerHTML = ++typedTimes;
  debounceFunc();
});
