


function greet(salutation){
return function(name){
 return `${salutation} from ${name}`
}
}


const person=greet("hello")

console.log(person('Bobby'))