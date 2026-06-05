// let str="{{[({)([}])]}"

let arr = [2, 3, 1, 4, 5, 9, 14, 10];

function display(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1]<arr[j]) {
        let temp = arr[j + 1];

        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(display(arr));
