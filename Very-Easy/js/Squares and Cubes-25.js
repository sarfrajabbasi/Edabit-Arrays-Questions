function checkSquareAndCube(arr) {
	return Math.sqrt(arr[0]) == Math.cbrt(arr[1]);
}

console.log(checkSquareAndCube([4, 8]), true)
console.log(checkSquareAndCube([5, 12]), false)
console.log(checkSquareAndCube([9, 27]), true)
console.log(checkSquareAndCube([25, 120]), false)
console.log(checkSquareAndCube([25, 125]), true)
console.log(checkSquareAndCube([36, 215]), false)
console.log(checkSquareAndCube([36, 217]), false)
console.log(checkSquareAndCube([144, 1728]), true)
console.log(checkSquareAndCube([1, 1]), true)
console.log(checkSquareAndCube([676, 17576]), true)