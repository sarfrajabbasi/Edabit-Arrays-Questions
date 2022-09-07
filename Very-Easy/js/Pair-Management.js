function makePair(num1, num2) {
	let array = [];
   return array.concat(num1,num2);
}
function makePair(num1,num2){
    return [...arguments];
}
function makePair(num1,num2){
    return [num1,num2]
}

console.log(makePair(1, 2), [1, 2])
console.log(makePair(21, 82), [21, 82])
console.log(makePair(4213, 526), [4213, 526])