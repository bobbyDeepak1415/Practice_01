let str = "success";

function display(str) {
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (obj[char]) return char;
    obj[char] = true;
  }

  return null;
}

console.log(display(str));
