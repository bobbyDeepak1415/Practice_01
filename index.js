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

const person1 = {
  name: "Bobby",
  age: 30,
  print(country) {
    return this.name + " is " + this.age + " years old and lives in "+country
  },
};

const person2 = {
  name: "Deepak",
  age: 31,
};



console.log(person1.print())

