const arr = ["cars", "planes", ["trains", ["motorcycles"]]]
var arr2 = arr.flat(2)
let [ trans1, trans2, trans3, trans4 ] = arr2

console.log(trans1, "cars", 'trans1 does not equal "cars"')
console.log(trans2, "planes", 'trans2 does not equal "planes"')
console.log(trans3, "trains", 'trans3 does not equal "trains"')
console.log(trans4, "motorcycles", 'trans4 does not equal "motorcycles"')