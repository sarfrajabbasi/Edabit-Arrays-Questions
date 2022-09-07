function arrayLessThan100(arr){
   let sum  = 0
   for(let i =0;i<arr.length;i++){
    sum += arr[i];
    
   }
   return (sum<100)? true:false;
}
console.log(arrayLessThan100([5, 57]), true)
console.log(arrayLessThan100([77, 30]), false)
console.log(arrayLessThan100([0, 59,15]), true)
console.log(arrayLessThan100([0]), true)
console.log(arrayLessThan100([35, 59,15]), false)
console.log(arrayLessThan100([25, 50, 25]), false)