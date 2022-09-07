function acceptedWords(arr){
    return arr.filter(x=>/^[^C]/.test(x))
}
function acceptedWords(arr){
    return arr.filter((word)=> !word.starWith("C"))
}
function acceptedWords(arr){
    return arr.filter(x=>!/^C/.test(x))
}
function acceptedWords(arr){
    let newArr = [];
    for(let i=0;i<arr.length;i++){
        
    }
}
console.log(acceptedWords(["Cans", "Worms", "Bugs", "Cold", "Beans"]), ["Worms", "Bugs", "Beans"])
console.log(acceptedWords(["Ducks", "Bears",  "Cats"]), ["Ducks", "Bears"])
console.log(acceptedWords(["cars", "trucks", "planes"]), ["cars", "trucks", "planes"])