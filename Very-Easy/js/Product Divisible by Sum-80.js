function divisible(arr) {
	// let multiArr = arr.reduce((a,b)=> a*b)
    // let sumArr =  arr.reduce((a,b)=> a+b)
    // if(multiArr%sumArr ===0){
    //     return true
    // }
    // return false
  let initialvalu = 1
  let initialvalu2 = 0
  let mutliply = (a,b) => a*b
  let add= (a,b) => a+b
  for(let i =0;i<arr.length;i++){
    initialvalu = mutliply(arr[i],initialvalu)
    initialvalu2 = add(arr[i],initialvalu2)
  }
    return (initialvalu%initialvalu2===0)? true :false;
}
console.log(divisible([3, 2, 4, 1]), false)
console.log(divisible([4, 4, 4, 4]), true)
console.log(divisible([4, 2, 6]), true)
console.log(divisible([1, 1, 1, 1, 10]), false)
console.log(divisible([10, 5, 10]), true)
console.log(divisible([3, 5, 1]), false)