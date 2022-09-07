function birthdayCakeCandles(candles) {
    const max = Math.max(...candles)
    let  count =0;
    for(let i = 0;i<candles.length; i++){
        if(candles[i] == max){
            count++;
        }
    }
    return count;
}   
console.log(birthdayCakeCandles([4,4,1,3]), 2)
console.log(birthdayCakeCandles([3,2,1,3]), 2)
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]), 4)
console.log(birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]), 5)

