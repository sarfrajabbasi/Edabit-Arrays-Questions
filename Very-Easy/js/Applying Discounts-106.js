function getDiscounts(nums,d){
    let a = []
    let parseI =parseInt(d)/100;
    for(let i =0;i<nums.length;i++){
        a.push(nums[i]* parseI)
    }
    return a
}
console.log(getDiscounts([2, 4, 6, 11], "50%"), [1, 2, 3, 5.5])
console.log(getDiscounts([10, 20, 40, 80], "75%"), [7.5, 15, 30, 60])
console.log(getDiscounts([100], "45%"), [45])