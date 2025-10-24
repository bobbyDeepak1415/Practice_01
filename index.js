console.log("start"); 

const func = () => {
 return new Promise((resolve, reject) => {
    console.log(1); 
    resolve("success"); 
  });
};
console.log("middle"); 

func().then((res) => {
  console.log(res);
});

console.log("end"); 
