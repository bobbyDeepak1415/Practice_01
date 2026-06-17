


const arr=[23,1,6,9,17]


function display(arr,target){

    let result=[]

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]===target)
result.push(i,j)
        }
    }

    return result

}


console.log(display(arr,7))



