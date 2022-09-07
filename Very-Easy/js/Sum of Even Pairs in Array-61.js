function oddSum(numbers) {
	const num =  numbers.slice(1).map((el,i)=>(el + numbers[i])%2 ===0 ? true : false)//numbers[i]=[0,1,2,3,4,5]
return num; 
}

console.log(oddSum([11, 15, 6, 8, 9, 10]), [true, false, true, false, false])
console.log(oddSum([12,21,5,9,65,32]),[false, true, true, true, false])
console.log(oddSum([12,21,5,9,65,32]),[false, true, true, true, false])
console.log(oddSum([1,2,3,4,5,6]),[false, false, false, false, false])
console.log(oddSum([4,5,6,7,9,45,12,32,65,49,45,840]),[false, false, false, true, true, false, true, false, true, true, false])
console.log(oddSum([88,45,654,123]),[false, false, false])
console.log(oddSum([98,4,12,565,798,465,13,1,365,14,89,565]),[true, true, false, false, false, true, true, true, false, false, true])

