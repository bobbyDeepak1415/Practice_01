function display1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("from 1");
      resolve()
      
    }, 1000);
  });
}

function display2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("from 2");
      resolve();
    }, 1100);
  });
}

function display3() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("from 3");
      resolve();
    }, 1100);
  });
}
async function display() {
  try {
    const result1 = await display1();
    const result2 = await display2();
    const result3 = await display3();
    return "all done"
  } catch (error) {
    console.log("not found");
  }
}

display().then((res)=>{
    console.log(res)
})