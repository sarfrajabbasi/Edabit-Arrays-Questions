function getFirstValue(arr) {
	const array = arr.shift()
    return array;
}

console.log(getFirstValue([1, 2, 3]), 1)
console.log(getFirstValue([80, 5, 100]), 80)
console.log(getFirstValue([-500, 0, 50]), -500)
console.log(getFirstValue([5, 2, 3]), 5)
console.log(getFirstValue([75675, 5, 100]), 75675)
console.log(getFirstValue([-52320, 0, 50]), -52320)