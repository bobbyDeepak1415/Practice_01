
function sum(a){
    return function(b){
        return function(c){
            
            return function(){

                
                return a+b+c
            }

        }
    }
}

const result=sum
const result1=result
const result2=result1
const result3=result2

console.log(result3(3)(2)(4)())