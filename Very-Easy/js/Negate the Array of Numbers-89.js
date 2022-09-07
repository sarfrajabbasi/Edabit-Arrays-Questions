function negate(arr) {
    let a = []
    if(arr.length ===0){
        return []
    }else{

        for(let i=0;i<arr.length;i++){
           a.push(arr[i] *= -1) 
        }
    }
    return a
}
function negate(arr) {
    if(arr.length ===0){
        return[]
    }else{
        var myMap = arr.map(x => x *=-1)   
     }
     return myMap
}
console.log(negate([1, 2, 3, 4]), [-1, -2, -3, -4])
console.log(negate([-1, -2, -3, -4]), [1, 2, 3, 4])
console.log(negate([]), [])