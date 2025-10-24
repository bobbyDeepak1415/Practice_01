function display1() {
  return new Promise((resolve) => {
    setTimeout((resolve) => {
      console.log("from 1");
      
    }, 1000);
  });
}

function display2() {
  setTimeout(() => {
    console.log("from 2");
  }, 1100);
}
function display3() {
  setTimeout(() => {
    console.log("from 3");
  }, 1100);
}

async function display() {
  try {
    const result1 = await display1();
    const result2 = await display2();
    const result3 = await display3();
  } catch (error) {
    console.log("not found");
  }
}

display()