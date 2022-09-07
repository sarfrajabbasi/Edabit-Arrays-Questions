function drop(drop,n){
return drop.slice(n)
}

console.log(drop([1, 2, 3], 2), [3])
console.log(drop([1, 2, 3], 5), [])
console.log(drop([1, 2, 3], 0), [1, 2, 3])
console.log(drop(["banana", "orange", "watermelon", "mango"], 2), ["watermelon", "mango"])
console.log(drop([], 2), [])