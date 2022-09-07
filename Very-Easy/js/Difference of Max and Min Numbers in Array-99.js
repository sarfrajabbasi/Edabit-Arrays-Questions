function diffMaxMin(arr) {
	let a = arr.sort((a,b)=> a-b);
    // let max = Math.max(...a)
    // let min = Math.min(...a)
    return Math.max(...a)-Math.min(...a)
}
console.log(diffMaxMin([10, 4, 1, 2, 8, 91]), 90)

console.log(diffMaxMin([-70, 43, 34, 54, 22]), 124)