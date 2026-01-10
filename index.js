
// debounce

const input=document.querySelector("input")
const clicked=document.querySelector(".clicked")
const run=document.querySelector(".func_run")


let clickedTimes=0
let runTimes=0


const myDebounce=(0=>{

})

const debounce=myDebounce(()=>{

    run.innerHTML=++runTimes

},1200)




document.addEventListener("input",()=>{
    clicked.innerHTML=++clickedTimes

})
