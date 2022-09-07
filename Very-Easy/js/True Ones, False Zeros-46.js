function integerBoolean(n){
    const splitStr = n.split('')
    return splitStr.map(x => x !== '0' ? true : false)
}

console.log(integerBoolean("100101"), [true, false, false, true, false, true])
console.log(integerBoolean("10"), [true, false])
console.log(integerBoolean("001"), [false, false, true])
console.log(integerBoolean(""), [])
console.log(integerBoolean("111"), [true, true, true])
console.log(integerBoolean("000"), [false, false, false])
console.log(integerBoolean("10010110"), [true, false, false, true, false, true, true, false])