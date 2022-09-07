function valueAt(arr,n){
   return  arr[Math.floor(n)];
// var a = Math.floor(n)
//    return arr[a]

}

console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2), 6)
console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2), 4)
console.log(valueAt([1, 2], 1.0 / 2), 1)
console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2), 5)