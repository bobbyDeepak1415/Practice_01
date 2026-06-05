function display() {
  let fName = "Bobby";

  return function () {
    console.log(this.fName);
  };
}

display();

const display1 = () => {
  let fName = "Bob";
  return function () {
    console.log(this.fName);
  };
};

display1();
