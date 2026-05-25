

function display(greeting){

  return function(name){

    return `${greeting} there ${name}`

  }



}

const call1=display("Hello")

console.log(call1("Bobby"))
