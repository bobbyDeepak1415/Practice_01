let person1 = {
  name: "Deepak",
  age: 29,
  active: true,
  adress:{
    city:"bengaluru",
    code:101
  }
};

let { name:title, adress:{city:sheher,code} } = person1;

console.log(title);
// console.log(age);
// console.log(active);

console.log(sheher);

