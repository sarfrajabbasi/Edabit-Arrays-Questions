function same(a1,a2){
    let arr1 =  a1.reduce((unique,item) =>
    unique.includes(item)? unique: [...unique,item],[]
    )
    let arr2 =a2.reduce((unique,item) =>
    unique.includes(item)? unique: [...unique,item],[]
    )
    return arr1.length === arr2.length
}
function same(a1,a2){
    let arr1 = a1.filter((item,index) => a1.indexOf(item)===index);
    let arr2 = a2.filter((item,index) => a2.indexOf(item)===index)
    return arr1.length ===arr2.length
}
function same(a1,a2){
    let arr1 =  [...new Set(a1)]
    let arr2 =  [...new Set(a2)]
    return arr1.length === arr2.length
}
console.log(same([1, 3, 4, 4, 4], [2, 5, 7]), true)
console.log(same([9, 8, 7, 6], [4, 4, 3, 1]), false)
console.log(same([2], [3, 3, 3, 3, 3]), true)
console.log(same([5, 6, 7, 9], [4, 1]), false)
console.log(same([5, 9, 9], [9, 5]), true)
console.log(same([1, 1, 1, 4], [1, 4, 4, 4, 4, 4]), true)
console.log(same([], []), true);