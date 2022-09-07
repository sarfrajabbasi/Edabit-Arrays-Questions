function stringPairs(str) {
    // create var called strPair and set it an [].
	const strPair = [];
    // if string is empty then return [].
    if(str.length ===0){return []};
    
    // iterate through the end of the string.
    for(let i = 0;i< str.length;i++){
        // length of string is even.
        if(str.length%2 === 0){
        // add the curr char to the neighbor char.
            strPair.push(str[i] + str[i + 1]);
            //increment by 1(so don't include the neighbor char in another pair)
            i++;

            // if length is odd
        } else if(str.length%2 !== 0){
            // if we are at last char in str.
               if(i ==str.length-1){
                // then add * to the and of the current char.
            strPair.push(str[i] + '*');
         }else{
            // add the currnt char to neighbor char.
            strPair.push(str[i] + str[i + 1]);
            i++;
         }
        }
    }

// return strPair
   return strPair; 

}



console.log(stringPairs("abcdef"), ["ab", "cd", "ef"])
console.log(stringPairs("abcdefg"), ["ab", "cd", "ef", "g*"])
console.log(stringPairs(""), [])
console.log(stringPairs("pak"), ["pa", "k*"])
console.log(stringPairs("mubashir"), ["mu", "ba", "sh", "ir"])
console.log(stringPairs("edabit"), ["ed", "ab", "it"])
console.log(stringPairs("airforces"), ["ai", "rf", "or", "ce", "s*"])