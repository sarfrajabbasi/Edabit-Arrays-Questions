function oddProduct(arr){
let oddNum = 1;
for(let i =0;i<arr.length;i++){
    if(arr[i]%2!==0){
        oddNum *= arr[i]
    }

}
return oddNum;
}


console.log(oddProduct([3, 4, 1, 1, 5]), 15)
console.log(oddProduct([5, 5, 8, 2, 4, 32]), 25)
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2]), 1)
console.log(oddProduct([0, 0, 0, 1]), 1)
console.log(oddProduct([1, 2, 2, 5, 2, 0]), 5)