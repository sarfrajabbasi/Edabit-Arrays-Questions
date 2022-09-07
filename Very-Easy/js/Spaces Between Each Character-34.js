function spaceMeOut(str) {
	return str.split("").join("\xa0")
}

console.log(spaceMeOut("space"), "s p a c e", "Example #1")
console.log(spaceMeOut("far out"), "f a r   o u t", "Example #2")
console.log(spaceMeOut("elongated musk"), "e l o n g a t e d   m u s k", "Example #3")
console.log(spaceMeOut("long"), "l o n g")
console.log(spaceMeOut("123"), "1 2 3")
console.log(spaceMeOut("a1b2c3"), "a 1 b 2 c 3")

