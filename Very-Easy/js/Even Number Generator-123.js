function findEvenNums(num) {
	let newArr = [];
    for(let i=2;i<=num;i++){
    if(i%2===0){
            newArr.push(i)
        }
    }
    return newArr
}
console.log(findEvenNums(4), [2, 4])
console.log(findEvenNums(8), [2, 4 ,6, 8])
console.log(findEvenNums(2), [2])
console.log(findEvenNums(1), [])
console.log(findEvenNums(9), [2, 4 ,6, 8])
console.log(findEvenNums(11), [2, 4 ,6, 8, 10])