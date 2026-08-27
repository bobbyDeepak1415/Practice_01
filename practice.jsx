



function display(){
    let name="Bobby"
return function(){
    return `${name} is my name`
}
}


const print=display()

console.log(print())

