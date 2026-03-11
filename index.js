// console.log("A");
// async function test() {
//   console.log("B");

//   Promise.resolve().then(()=>console.log("C"))
//  await Promise.resolve()
//   console.log("D");

// }
// test();
// Promise.resolve().then(() => console.log("E"));
// setTimeout(() => console.log("F"), 0);
// console.log("G");

// const fruits = ["apple", "banana", "apple"];



const users = [
  { id: 1, name: "Alex" },
  { id: 2, name: "Sam" },
];



const userMap=users.reduce((acc,user)=>{
    acc[user.id]=user.name
    return acc
},{})


console.log(userMap)