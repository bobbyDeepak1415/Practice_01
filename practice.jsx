function display() {

    let bonus=45


  return function (num) {
    return num +bonus;
  };
}

const display1 = display();

console.log(display1(7));
