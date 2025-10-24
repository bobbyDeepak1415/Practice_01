

function display1(){

setTimeout(()=>{
console.log("from 1")
},1000)
}


function display2(){
   setTimeout(() => {
     console.log("from 2");
   }, 1100);
}
function display3(){
   setTimeout(() => {
     console.log("from 3");
   }, 1100);
}




async function display(){
    const result1=await display1()
}