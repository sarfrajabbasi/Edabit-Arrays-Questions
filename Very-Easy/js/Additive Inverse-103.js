function additiveInverse(arr){
    let a =[]
    for(let i=0;i<arr.length;i++){
        a.push(arr[i]*-1)
    }
    return a
}
function additiveInverse(arr){
   return arr.map(x => x*-1)
}
console.log(additiveInverse([5, -7, 8, 3]), [-5, 7, -8, -3])
console.log(additiveInverse([1, 1, 1, 1, 1]), [-1, -1, -1, -1, -1])
console.log(additiveInverse([-5, -25, 35]), [5, 25, -35])