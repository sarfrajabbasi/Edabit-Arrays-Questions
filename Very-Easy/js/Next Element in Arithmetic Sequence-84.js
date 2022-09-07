function nextElement(arr){
    let b;
    for(let i=0;i<arr.length;i++){
       b =  arr[i +1] - arr[i]
       return arr[arr.length-1] + b
    }
}
console.log(nextElement([3, 5, 7, 9]), 11) 
console.log(nextElement([-5, -6, -7]), -8) 
console.log(nextElement([2, 2, 2, 2, 2]), 2)