function correctStream(user, correct) {
    let b = []
	for(let i =0;i<correct.length;i++){
        if(user.includes(correct[i])){
            b.push(1)
        }else{
            b.push(-1)
        }
    }
    return b
}

console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]), [1, 1, -1])
console.log(correctStream(["april", "showrs", "bring", "may", "flowers"], ["april", "showers", "bring", "may", "flowers"]), [1, -1, 1, 1, 1])
console.log(correctStream(["weird", "indicr", "moment"], ["weird", "indict", "moment"]), [1, -1, 1])
console.log(correctStream(["starry", "wind", "skies"], ["starry", "wind", "skies"]), [1, 1, 1])