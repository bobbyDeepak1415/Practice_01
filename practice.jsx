let person1 = {
  title: "Bob",
  age: 30,
  active: true,
  print() {
    console.log(
      `${this.title} is ${this.age} years old and status is ${this.active}`,
    );
  },
};



let person2 = {
    title: "Deepak",
    age: 50,
};


console.log(person1.print().call(person2));