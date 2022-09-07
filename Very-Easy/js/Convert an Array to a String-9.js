function arrayToString(arr){
    return arr.join('')
}

console.log(arrayToString([1,2,3,4,5,6]), "123456")
console.log(arrayToString(['a','b','c','d','e','f']), "abcdef")
console.log(arrayToString([1,2,3,'a','s','d']), "123asd")
console.log(arrayToString(['a','s','d','f','e','r',1,2,3,4,5,0]), "asdfer123450")
console.log(arrayToString(['A','D','F','G','H','Y','TR','NNHJK']), "ADFGHYTRNNHJK")