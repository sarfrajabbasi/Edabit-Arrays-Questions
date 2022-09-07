function findFactors(num) {

    let arr = [];
	for(let i = 1;i<=num; i++){
        if(num%i ===0){
   arr.push(i)
        }
    }
    return arr;
}

console.log(findFactors(9), [1, 3, 9])
console.log(findFactors(12), [1, 2, 3, 4, 6, 12])
console.log(findFactors(20), [1, 2, 4, 5, 10, 20])
console.log(findFactors(0), [])
console.log(findFactors(100), [1, 2, 4, 5, 10, 20, 25, 50, 100])
console.log(findFactors(999), [1, 3, 9, 27, 37, 111, 333, 999])
console.log(findFactors(2226), [1, 2, 3, 6, 7, 14, 21, 42, 53, 106, 159, 318, 371, 742, 1113, 2226])
