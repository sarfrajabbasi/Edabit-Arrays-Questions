function forbiddenLetter(char, arr) {
for(let i = 0; i<arr.length; i++){
    let str = arr[i];
    let n = str.includes(char);
    if(n){
        return false;
    }
}
return true;
}

console.log(forbiddenLetter('e', ['rinse', 'and', 'repeat']), false)
console.log(forbiddenLetter('d', ['python', 'javascript', 'ruby', 'fortran']), true)
console.log(forbiddenLetter('a', ['spoon', 'fork', 'knife']), true)
console.log(forbiddenLetter('b', ['test', 'dot', 'assert', 'equals']), true)
console.log(forbiddenLetter('i', ['rock', 'paper', 'scissors']), false)
console.log(forbiddenLetter('t', []), true)

// Author: Joshua Señoron