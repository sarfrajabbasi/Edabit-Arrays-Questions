function checkFactors(factors, num) {
	return factors.every(x=> num%x ===0)
}


console.log(checkFactors([2, 3, 4], 12), true)
console.log(checkFactors([1, 2, 3, 8], 12), false, '8 is not a factor of 12')
console.log(checkFactors([1, 2, 50], 100), true)
console.log(checkFactors([1, 9, 81], 81), true)
console.log(checkFactors([5, 10, 50], 500), true)
console.log(checkFactors([5, 10, 499], 500), false, '499 is not a factor of 500')
console.log(checkFactors([3, 6], 9), false, '6 is not a factor of 9')