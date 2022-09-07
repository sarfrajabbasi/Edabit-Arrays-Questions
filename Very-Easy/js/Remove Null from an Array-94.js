function removeNull(arr){
let a = [];
for(let i=0;i<arr.length;i++){
    if(arr[i]!== null){
        a.push(arr[i])
    }
}
return a
}
console.log(removeNull(['a', null, 'b', null]), ['a', 'b'])
console.log(removeNull([null, null, null, null, null]), [])
console.log(removeNull([7, 8, null, 9]), [7, 8, 9])
console.log(removeNull([7, null, 8, null, 9]), [7, 8, 9])