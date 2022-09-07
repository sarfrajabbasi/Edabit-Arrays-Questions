function acceptedWords(arr) {
	
    return list.filter(x => /^^C/.test(x));

}

console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]), ["Worms", "Bugs", "Beans"])
console.log(acceptedWords(["Ducks", "Bears",  "Cats"]), ["Ducks", "Bears"])
console.log(acceptedWords(["cars", "trucks", "planes"]), ["cars", "trucks", "planes"])