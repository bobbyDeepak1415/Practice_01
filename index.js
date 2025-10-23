var x = 1;


a(); //10
b(); //100

console.log(x); //1
function a() {
  var x = 10;
  console.log(x); //10
}
function b() {
  var x = 100;
  console.log(x); //100
}

