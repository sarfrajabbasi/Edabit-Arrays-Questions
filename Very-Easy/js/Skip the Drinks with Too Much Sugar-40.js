function skipTooMuchSugarDrinks(drinks){
var k = drinks.filter(x  = x => x !== "cola" && x !== "fanta" );
return k;
}
console.log(skipTooMuchSugarDrinks(["cola", "fanta"]), [])
console.log(skipTooMuchSugarDrinks(["cola", "fanta", "water"]), ["water"], "")
console.log(skipTooMuchSugarDrinks(["cola"]), [], "")
console.log(skipTooMuchSugarDrinks([]), [], "")
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "fanta"]), ["lemonade", "beer"], "")
console.log(skipTooMuchSugarDrinks(["water", "cola"]), ["water"], "")
console.log(skipTooMuchSugarDrinks(["water", "tea"]), ["water", "tea"], "")