function mysteryFunc(arr,num){
    return arr.map(x=> x%num )
}

function mysteryFunc(arr,num){
    let a = [];
    for(let i=0;i<arr.length;i++){
        a.push(arr[i]%num)
    }
    return a
}
console.log(mysteryFunc([5, 7, 8, 2, 1], 2), [1, 1, 0, 0, 1])
console.log(mysteryFunc([9, 8, 16, 47], 4), [1, 0, 0, 3])
console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5), [2, 1, 4, 0, 3, 1])
console.log(mysteryFunc([6, 1], 7), [6, 1])
console.log(mysteryFunc([3, 2, 9], 3), [0, 2, 0])
console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10), [8, 2, 0, 9, 3, 0])