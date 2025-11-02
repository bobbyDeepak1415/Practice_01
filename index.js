function outerFunc(outerVariable) {
  return function innerFunc(innerVariable) {
    return function innnnerFunc(innnnerVariable) {
      return outerVariable + innerVariable + innnnerVariable;
    };
  };
}

const newFunc = outerFunc;
const newerFunc = newFunc;
const oneMore = newerFunc;

console.log(oneMore("000")("111")("222"));

// console.log(outerFunc("000")("111")("222"));
