


let obj1={
    name:"Bobby",
    age:30,

    display(city,state){
return this.name+" is "+this.age+" years old and is from "+city+" in "+state
    }
}


let obj2={
    name:"Jon",
    age:45
}


// console.log(obj1.display())
const print=obj1.display.bind(obj2,"ny","DC")

console.log(print())







