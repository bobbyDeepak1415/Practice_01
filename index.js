

function outerFunc(outerVariable){
  return function innerFunc(innerVariable){
    return function innnnerFunc(innnnerVariable){
      return function oneMore(){

        return outerVariable+innerVariable+innnnerVariable
      }

    }
  }
}






console.log(outerFunc("000")("111")("222")());
