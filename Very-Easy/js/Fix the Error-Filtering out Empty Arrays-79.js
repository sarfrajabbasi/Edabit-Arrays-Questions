function removeEmptyArrays(array){
    // let a;
    // a = array.flat(2)
    // return a;

    let a = [];
   
    for(let i =0;i<array.length;i++){
        if(!Array.isArray(array[i])){
            a.push(array[i])
        }
        

    }
    return a;
   
}
console.log(removeEmptyArrays(['a', 'b', []]), ['a', 'b'])
console.log(removeEmptyArrays([1, 2, [], 4]), [1, 2, 4])
console.log(removeEmptyArrays([[], [], [], []]), [])
console.log(removeEmptyArrays([1, 2, 3, 4]), [1, 2, 3, 4])
console.log(removeEmptyArrays([1, [], [], 4]), [1, 4])