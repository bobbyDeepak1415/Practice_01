function display() {
  let count = 0;

  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
  };
}
const counter=display()


console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.increment())