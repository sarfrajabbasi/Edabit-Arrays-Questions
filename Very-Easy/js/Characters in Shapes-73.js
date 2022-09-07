function countCharacters(arr) {
    // let sum = "";
    let ar = arr.join('')
	// for(let i =0;i<arr.length;i++){
    //     sum += arr[i]

    // }
    // return sum.length;
    return ar.length;
}
console.log(countCharacters([
    '###',
    '###',
    '###'
    ]), 9)
    
    console.log(countCharacters([
    '22222222',
    '22222222',
    ]), 16)
    
    console.log(countCharacters([
    '------------------'
    ]), 18)
    
    console.log(countCharacters([]), 0)
    console.log(countCharacters([
    '',
    '']), 0)