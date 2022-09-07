function firstLast(arr){
    let aPop=  arr.pop()
    let bShift=  arr.shift()
    return [bShift,aPop]
}

function firstLast(arr){
    return [arr[0],arr[arr.length-1]]
}
console.log(firstLast([5, 10, 15, 20, 25]), [5, 25])
console.log(firstLast(["edabit", 13, null, false, true]), ["edabit", true])
console.log(firstLast([undefined, 4, "6", "hello", null]), [undefined, null])
console.log(firstLast(["hello", "edabit", "dot", "com"]), ["hello", "com"])
console.log(firstLast([3, 2, 1]), [3, 1])
console.log(firstLast(["one", "two"]), ["one", "two"])
console.log(firstLast([false, false, true, false, false, true, false]), [false, false])