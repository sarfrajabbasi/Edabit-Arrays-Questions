function invertArray(arr) {
	return arr === 0 ? [0] : arr.map(x => -(x));
}

console.log(invertArray([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5])
console.log(invertArray([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5])
console.log(invertArray([]), [])
console.log(invertArray([0]), [0])
