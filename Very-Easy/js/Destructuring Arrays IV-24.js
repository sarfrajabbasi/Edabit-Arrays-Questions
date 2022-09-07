const str = '[head, ...tail] = [1, 2, 3, 4]'

eval(str)

const validString = (str) => {
  return /\.\.\./.test(str) ? "rest" : false
}

const validArray = (str) => {
	return /\[\s*1\s*\,\s*2\s*\,\s*3\s*\,\s*4\s*\]$/.test(str) ? "array" : false
}

console.log(validString(str), "rest", "You need to use the Rest element.")
console.log(validArray(str), "array", "[1, 2, 3, 4] should remain untouched.")
console.log(head, 1, "head should equal to 1")
console.log(tail, [2,3,4], "tail should equal to [2, 3, 4]" )