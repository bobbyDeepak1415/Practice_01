const input = document.querySelector("input");
const clicked = document.querySelector(".clicked");
const run = document.querySelector(".func_run");

let typedTimes = 0;
let runTimes = 0;


const debounceFunc=myDebounce(()=>{

    

},1200)


input.addEventListener("input", () => {
  clicked.innerHTML = typedTimes++;
  debounceFunc();
});
