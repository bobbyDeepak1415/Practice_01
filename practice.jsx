



function display(){
    let name="Bobby"
return function(age){
    return `${name} is ${age} years old`
}
}


const print=display()

console.log(print(30))

