

const person1={
fname:"Bobby",
lname:"deepak"

}


function display(state,country){
  return this.fname+" "+this.lname+" is from "+state+" in "+country
}


const result=display.bind(person1,"ap","india")
console.log(result())