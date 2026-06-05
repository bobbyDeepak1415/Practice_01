let person = {
  lName: "Deepak",

  regular() {
    return function () {
      return this.lName;
    };
  },

  arrow() {
    return () => {
      return this.lName;
    };
  },
};

let call1 = person.regular();
let call2 = person.arrow();

console.log(call1());
console.log(call2());
