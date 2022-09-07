var [a,b]=[1,2];
const arr = [1, 2, 3, 4, 5, 6]

function test(x) {
 return x === arr[0] || x === arr[1] ? true : false 
}

console.log(test(a), true, "Variable a does not equal 1")
console.log(test(b), true, "Variable b does not equal 2")