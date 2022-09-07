function findSmallestNum(arr) {
	return Math.min(...arr)
}
function findSmallestNum(arr){
	return arr.sort((a,b)=> a-b)[0]
}
function findSmallestNum(arr){
	arr =arr.sort((a,b)=>a-b)
	return arr[0]
}
console.log(findSmallestNum([34, 15, 88, 2]), 2)
console.log(findSmallestNum([34, -345, -1, 100]), -345)
console.log(findSmallestNum([-76, 1.345, 1, 0]), -76)
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]), -0.9999)
console.log(findSmallestNum([7, 7, 7]), 7)
console.log(findSmallestNum([4, 6, 1, 3, 4, 5, 5, 1]), 1)
console.log(findSmallestNum([-4, -6, -8, -1]), -8)
console.log(findSmallestNum([54, 76, 23, 54]), 23)
console.log(findSmallestNum([100]), 100)
console.log(findSmallestNum([0, 1, 2, 3, 4, 5]), 0)