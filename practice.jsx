let str = "AABCCDDAABBDbbddDaDDd";

function display(arr) {
  let obj = {};

  let result = "";

  for (let i of arr) {
    let j = i.toLowerCase();
    obj[j] = (obj[j] || 0) + 1;
  }
  let seen = new Set();

  for (let i of arr) {
    let j = i.toLowerCase();
    if (!seen.has(j)) {
      seen.add(j);
      result += i + obj[j];
    }
  }

  return result;
}

console.log(display(str));
