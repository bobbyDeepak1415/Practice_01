function call(num) {
  const arr = [];

  if (arr.length >= 5) return;

  if (num > 0) {
    num++;
    arr.push(num);
  }

  call();
}

console.log(call(0));
