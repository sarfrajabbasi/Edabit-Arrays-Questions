function getSequence(low, high) {
    let newArr = []
    for(let i=low;i<=high;i++){
        newArr.push(i)
    }
    return newArr
}
console.log(getSequence(1, 5), [1, 2, 3, 4, 5], "Example #1")
console.log(getSequence(98, 100), [98, 99, 100], "Example #2")
console.log(getSequence(1000, 1000), [1000], "Example #3")
console.log(getSequence(1450, 1460), [1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460])
console.log(getSequence(0, 3), [0, 1, 2, 3])
console.log(getSequence(-10, 1), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0,  1])
console.log(getSequence(-100, -100), [-100])