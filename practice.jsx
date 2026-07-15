


const prom=new Promise((resolve,reject)=>{
  console.log("hello")
  resolve()
})


prom.then(()=>{
  console.log("bye")
}).catch((err)=>{
  console.log('error',err)
})


