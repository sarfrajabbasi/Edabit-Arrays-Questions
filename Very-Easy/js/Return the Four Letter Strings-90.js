function isFourLetters(arr) {
    let a = []
	for(let i=0;i<arr.length;i++){
        if(arr[i].length === 4){
            a.push(arr[i])
        }
    }
    return a
}
function isFourLetters(arr) {
    return arr.filter(x => x.length===4)
}
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]), ["Ryan", "Matt"])
console.log(isFourLetters(["Tomato", "Potato", "Pair"]), ["Pair"])
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"]), ["Bear"])
console.log(isFourLetters(["Red", "Blue", "Green", "Pink"]), ["Blue", "Pink"])
console.log(isFourLetters(["is", "up", "two", "elephant"]), [])
console.log(isFourLetters([]), [])
console.log(isFourLetters(["jazz", "quiz", "jump"]), ["jazz", "quiz", "jump"])
console.log(isFourLetters([""]), [])
console.log(isFourLetters(["Broccoli", "Carrot", "Spinach"]), [])