function evenOrOdd(arr) {
	var arr2 = arr.reduce((x,y) => x + y,0)
    if( arr2%2 === 0  ){
        return "even"
    }else{
        return "odd"
    }
}
// **************************************
function evenOrOdd(arr){
    var arr2 = arr.reduce((x,y) => x + y,0)%2 !==0 ? "odd" : "even";
    return arr2;
}
// *****************************8
function evenOrOdd(arr) {
	let count = 0
	arr.forEach(num => count+=num)
	
	return count%2 === 0 ? 'even' : 'odd'
}
console.log(evenOrOdd([0]), 'even')
console.log(evenOrOdd([1]), 'odd')
console.log(evenOrOdd([]), 'even')
console.log(evenOrOdd([0, 1, 5]), 'even')
console.log(evenOrOdd([0, 1, 3]), 'even')
console.log(evenOrOdd([1023, 1, 2]), 'even')
console.log(evenOrOdd([0, -1, -5]), 'even')
console.log(evenOrOdd([0, -1, -3]), 'even')
console.log(evenOrOdd([-1023, 1, -2]), 'even')
console.log(evenOrOdd([0, 1, 2]), 'odd')
console.log(evenOrOdd([0, 1, 4]), 'odd')
console.log(evenOrOdd([1023, 1, 3]), 'odd')
console.log(evenOrOdd([0, -1, 2]), 'odd')
console.log(evenOrOdd([0, 1, -4]), 'odd')
console.log(evenOrOdd([-1023, -1, 3]), 'odd')