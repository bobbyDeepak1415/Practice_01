function display(greeting, name, age) {
  return `${greeting} ${name} ${age}`;
}

const call1 = display("Hello");

const call2 = call1("bobby");

console.log(call2(30));

// function call(num) {
//   const arr=[]

//   if(num>0){
//     num++
//     arr.push(num)
//     call(num);

//   }

//   call()

// }

// console.log(call(0));
