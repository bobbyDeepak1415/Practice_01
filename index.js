const arr1 = ["apple", "mangoes", "grapes", "oranges"];

function display(arr) {
  const local = [...arr1];
  const random = Math.floor(Math.random() * local.length - 1);
  return local[random];
}



switch(display(arr1)){
    case "apple":
    console.log("apples are good")
    break
    case "mangoes":
    console.log("mangoes are the best")
    break
    case "grapes":
    console.log("grapes are ok")
    break
    case "oranges":
    console.log("oranges are like mangoes")
    break
    default :
    console.log("fruits are good")

}