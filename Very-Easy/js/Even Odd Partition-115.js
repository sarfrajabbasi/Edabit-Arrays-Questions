function evenOddPartition(arr){
    let a = [];
    let b = [];
    for(let i =0;i<arr.length;i++){
        if(arr[i]%2===0){
            a.push(arr[i])
        }else{
            b.push(arr[i])
        }
    }
    return [a,b]
}
function evenOddPartition(arr){
    let a = [[],[]];
    for(let i =0;i<arr.length;i++){
        (arr[i]%2===0)? a[0].push(arr[i]) : a[1].push(arr[i])
    }
    return a
}

console.log(evenOddPartition([5, 8, 9, 2, 0]), [[8, 2, 0], [5, 9]])
console.log(evenOddPartition([1, 0, 1, 0, 1, 0]), [[0, 0, 0], [1, 1, 1]])
console.log(evenOddPartition([8, 8, 4, 2]), [[8, 8, 4, 2], []])
console.log(evenOddPartition([1, 3, 5, 7, 9]), [[], [1, 3, 5, 7, 9]])
console.log(evenOddPartition([]), [[], []])