function filterDigitLength(arr,num){
  return arr.toString().split(',').filter(x=> x.length === num).map(x=> +x)

}
function filterDigitLength(arr,num){
    let emArr  =[]
    let a = arr.toString()
    let b  = a.split(",")
    for(let i =0;i<b.length;i++){
        if(b[i].length===num){
            emArr.push(+b[i])
        }
    }
    return emArr

}
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3), [232, 555])
console.log(filterDigitLength([2, 7, 8, 9, 1012], 1), [2, 7, 8, 9])
console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1), [], 'Should return empty array if no numbers of specified length exist.')
console.log(filterDigitLength([5, 6, 8, 9], 1), [5, 6, 8, 9], 'Should return original array if every digit is that length.')
console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 3), [838, 435, 989, 431])
console.log(filterDigitLength([99, 838, 435, 7666, 989, 431], 2), [99])