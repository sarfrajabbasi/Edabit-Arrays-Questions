function hurdleJump(hurdles, jumpHeight) {
    if(hurdles.length ===0){
        return true
    }

    for(let i=0;i<hurdles.length;i++){
      return  (hurdles[i] < jumpHeight)? true : false
    }
    
}
console.log(hurdleJump([1, 2, 3, 4, 5], 5), true)
console.log(hurdleJump([5, 5, 3, 4, 5], 3), false)
console.log(hurdleJump([5, 4, 5, 6], 10), true)
console.log(hurdleJump([1,2,1], 1), false)
console.log(hurdleJump([3,3,3], 4), true)
console.log(hurdleJump([4,4], 3), false)
console.log(hurdleJump([], 4), true)