


let str="hello world from bobby"


function display(str){
    
    let arr=str.split(" ")
    let result=[]

    for(let i of arr){
        let capWord=i.charAt(0).toUpperCase()+i.slice(1)
        let reverseWord=capWord.split("").reverse().join("")
        result.push(reverseWord)
    }
    
    return result.join(" ")
    
}

console.log(display(str))
