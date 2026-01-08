

var a=10
console.log(a)

setTimeout(()=>{
console.log("timeout")
},0)

Promise.resolve().then(()=>{
    console.log("promise")
})

console.log("end")

// 10,end,promise,timeout