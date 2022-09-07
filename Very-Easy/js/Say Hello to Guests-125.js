function greetPeople(names) {
	let str ="";
    for(let i=0;i<names.length;i++){
        str += "Hello "+ names[i] + " "
    }
    return str
}


console.log(greetPeople(["Kyrill"]),  "Hello Kyrill")
console.log(greetPeople(["Kyrill", "Mom", "Dad", "Zuzu"]), "Hello Kyrill, Hello Mom, Hello Dad, Hello Zuzu")
console.log(greetPeople([]), "")