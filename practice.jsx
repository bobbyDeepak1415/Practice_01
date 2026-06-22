let person1 = {
  title: "Bob",
  age: 30,
  active: true,
  print(city) {
    console.log(
      `${this.title} is ${this.age} years old and status is ${this.active} and is from ${city}`,
    );
  },
};

let person2 = {
  title: "Deepak",
  age: 50,
};

person1.print.apply(person2, ["Ongole"]);
