

let city="ongole"

function display(){
    let name="Bobby"
    console.log(`${name} is from ${city}`)
return function(age){
    return `${name} is ${age} years old`
}
}


const print=display()

console.log(print(30))

