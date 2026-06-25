function createCounter() {
  let count = 0;
  return () => ++count;
}
const a = createCounter();
const b = createCounter();
a();
a();
b();
