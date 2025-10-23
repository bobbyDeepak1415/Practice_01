const btn = document.querySelector("button");
const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");

let clickedTimes = 0;
let runTimes = 0;

// const debounce

btn.addEventListener("click", () => {
  clicked.innerHTML = clickedTimes++;
  run.innerHTML = runTimes++;
});
