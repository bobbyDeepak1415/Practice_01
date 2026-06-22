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

const print2 = person1.print()

console.log(print2);

let person2 = {
  title: "Deepak",
  age: 50,
};

// person1.print()
