function length(s) {
	var length = 0;
    while(s[length] !== undefined){
        length++;
    }
    return length;
}

console.log(length("Hello World"), 11)
console.log(length("Edabit"), 6)
console.log(length("wash your hands!"), 16)
console.log(length("34445"), 5)
console.log(length("   "), 3)
console.log(length(""), 0)
console.log(length("%%$"), 3)