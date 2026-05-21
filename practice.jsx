const checkFrequency = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let f1 = {};
  let f2 = {};

  for (let val of arr1) {
    f1[val] = (f1[val] || 0) + 1;
  }

  for (let val of arr2) {
    f2[val] = (f2[val] || 0) + 1;
  }

//   console.log(f1, f2);

  for (let val1 of arr1) {
    let square = val1 * val1;
    if (!f2[square]) {
      return false;
    }
  }

  return true;
};


checkFrequency([1, 2, 3], [1,4,9]); // false
checkFrequency([], []) // false


