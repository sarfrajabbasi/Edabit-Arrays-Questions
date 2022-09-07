function sum(arr){
    let a =0
    for(let i=0;i<arr.length;i++){
        a+=arr[i]
    }
    return a
}
console.log(sum([1, 2, 3, 4]), 10)
console.log(sum([-1, -1, -1]), -3)
console.log(sum([1]), 1)
console.log(sum([]), 0)

