function binaryToDecimal(arr) {
	const binaryString = arr.join("")
    return parseInt(binaryString,2);
}
// **************************************
function binaryToDecimal(arr){
    return arr.reduce((acc,val) => (acc << 1) | val)
}

console.log(binaryToDecimal([0,0,0,1]), 1)
console.log(binaryToDecimal([0,0,1,0]), 2)
console.log(binaryToDecimal([1,1,1,1]), 15)
console.log(binaryToDecimal([0,1,1,0]), 6)
console.log(binaryToDecimal([1,0,1,0,1,1,1]), 87)
console.log(binaryToDecimal([1,1,1,1,1,0,1,1,0,1]), 1005)
console.log(binaryToDecimal([1,1,1,1,1,0,1,1,1,0,1]), 2013)