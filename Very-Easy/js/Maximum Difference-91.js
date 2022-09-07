function difference(nums){
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    return max-min
}
console.log(difference([-9, -8, 6, -9, 15, 6]), 24)
console.log(difference([-5, 6, 18, 4, 16, -2]), 23)
console.log(difference([-2, 20, -9, -9, -2, -7]), 29)
console.log(difference([4, -2, 11, -9, 15, 2]), 24)
console.log(difference([15, 10, 3, -6, 6, 19]), 25)
console.log(difference([1, 7, 18, -1, -2, 9]), 20)
console.log(difference([5, 1, -9, 7, -8, -10]), 17)
console.log(difference([-4, 17, -4, 20, -7, 0]), 27)
console.log(difference([-2, 11, 11, -3, -3, -3]), 14)
console.log(difference([1, 15, 14, 20, 10, 6]), 19)
console.log(difference([4, 17, 12, 2, 10, 2]), 15)
console.log(difference([-3, 3, 20, 10, 0, 17]), 23)
console.log(difference([-3, 6, 20, 9, 6, 7]), 23)
console.log(difference([16, 15, 1, 18, -7, -3]), 25)
console.log(difference([-7, 4, -4, -3, -8, -9]), 13)
console.log(difference([15, 8, 17, 18, 10, 10]), 10)
console.log(difference([-3, 20, 16, 8, 18, -10]), 30)
console.log(difference([6, 18, 9, 1, 3, 1]), 17)
console.log(difference([20, 18, -2, -10, -10, 17]), 30)
console.log(difference([18, 20, -7, -4, -2, -8]), 28)