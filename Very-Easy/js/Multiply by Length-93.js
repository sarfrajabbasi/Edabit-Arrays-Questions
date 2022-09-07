function multiplyByLength(arr) {
    let a = []
	let mlength = arr.length;
    for(let i =0 ;i<arr.length;i++){
        a.push(arr[i] *mlength)
    }
    return a
}
console.log(multiplyByLength([2, 6, 4, 9]), [8, 24, 16, 36])
console.log(multiplyByLength([4, 1, 1]), [12, 3, 3])
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]), [7, 0, 21, 21, 49, 14, 7])
console.log(multiplyByLength([0]), [0])