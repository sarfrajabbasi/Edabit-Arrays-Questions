function arithmeticProgression(start, diff, n) {
    let arr = [];
	for(let i = start ;  arr.length <n; i+= diff){
        arr.push(i)
    }
    return arr.join(" , ");
}



console.log(arithmeticProgression(1, 2, 5),  "1, 3, 5, 7, 9")
console.log(arithmeticProgression(1, 0, 5), "1, 1, 1, 1, 1")
console.log(arithmeticProgression(1, -3, 10), "1, -2, -5, -8, -11, -14, -17, -20, -23, -26")
console.log(arithmeticProgression(100, -10, 10), "100, 90, 80, 70, 60, 50, 40, 30, 20, 10")
