function deNest(nestedArr){
let nestedVal;
nestedVal =  nestedArr.flat(Infinity).pop();
return nestedVal;
}
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]]), 3)
console.log(deNest([[[[[[[true]]]]]]]), true)
console.log(deNest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]]), 'edabit')
console.log(deNest([1]), 1)
console.log(deNest([[[[[[[4.3]]]]]]]), 4.3)
console.log(deNest([[[[[false]]]]]), false)
console.log(deNest([['sixty']]), 'sixty')
