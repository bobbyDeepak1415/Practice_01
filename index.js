// console.log("A");
// async function test() {
//   await Promise.resolve(); 1
//   console.log("B");

//   await Promise.resolve().then(() => console.log("C")); 2
//   await Promise.resolve();
//   console.log("D");
// }
// test();
// Promise.resolve().then(() => console.log("E"));
// setTimeout(() => console.log("F"), 0);
// console.log("G");



let arr1=[34,4,12,5,3,2,1]


function display(arr){

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
    }

    return arr

}

console.log(display(arr1))