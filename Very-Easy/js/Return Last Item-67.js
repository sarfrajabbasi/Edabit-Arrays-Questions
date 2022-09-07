function lastItem(input){
    const Arr = input;
    for(let i =0;i<Arr.length;i++){
if(Arr[i] ==="" || Arr[i]===[]){
    return undefined;
}
    }
    return Arr[Arr.length-1];
    //  const lastElement = input[input.length-1]
    //  return lastElement;
}

console.log(lastItem([0, 4, 19, 34, 50, -9, 2]), 2)
console.log(lastItem(["Hello", "There", "JavaScript", "User"]), "User")
console.log(lastItem([]), undefined)
console.log(lastItem([true, false, false, true]), true)
console.log(lastItem([(5, 0), (0, 5, 6, 7), (3, 5, 67, 7), (0, -9, 3, 45, 5)]), (0, -9, 3, 45, 5))
console.log(lastItem("JavaScript is a great programming langauge."), ".")
console.log(lastItem(["H", "E", "L", "L", "O"]), "O")
console.log(lastItem("The quick brown fox jumped over the lazy dog"), "g")
console.log(lastItem(""), undefined)