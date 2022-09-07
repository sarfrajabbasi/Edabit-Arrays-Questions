function sumArray(arr){
let sum = 0;
for(let i = 0;i< arr.length; i++){
     sum +=arr[i];
}
return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]), 15)
console.log(sumArray([-1, 0, 1]), 0)
console.log(sumArray([0, 4, 8, 12]), 24)