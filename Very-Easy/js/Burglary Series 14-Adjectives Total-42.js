// function totalAmountAdjectives(obj) {
// 	return Object.keys(obj).length;
// }
function totalAmountAdjectives(obj) {
	return Object.values(obj).length
}
const obj = { a: "moron" }
const obj2 = { a: "moron", b: "scumbag", c: "moron", d: "dirtbag" } 
const obj3 = {b: "scumbag", c: "moron", d: "dirtbag" } 
let dynamic = {}
const random = test.randomNumber()
let arr = new Array(random).fill(".")
arr.forEach((item, i) => dynamic[i] = item)

console.log(totalAmountAdjectives(obj), 1)
console.log(totalAmountAdjectives(obj2), 4)
console.log(totalAmountAdjectives(obj3), 3)
console.log(totalAmountAdjectives(dynamic), random)