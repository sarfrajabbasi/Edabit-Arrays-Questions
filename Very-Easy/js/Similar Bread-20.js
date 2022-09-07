function hasSameBread(arr1, arr2) {
	var sameBread =  arr1[0] == arr2[0] && arr1[2] == arr2[2];
	return sameBread;
}
console.log(hasSameBread(
	["white bread", "lettuce", "white bread"],
	["white bread", "tomato", "white bread"]
), true)

console.log(hasSameBread(
	["brown bread", "chicken", "brown bread"],
	["white bread", "chicken", "white bread"]
), false)

console.log(hasSameBread(
	["toast", "cheese", "toast"],
	["brown bread", "cheese", "toast"]
), false)

console.log(hasSameBread(
	["white bread", "lettuce", "toast"],
	["white bread", "tomato", "toast"]
), true)

console.log(hasSameBread(
	["white bread", "lettuce", "toast"],
	["brown bread", "tomato", "toast"]
), false)

console.log(hasSameBread(
	["white bread", "lettuce", "brown bread"],
	["brown bread", "tomato", "white bread"]
), false)

console.log(hasSameBread(
	["white bread", "lettuce", "brown bread"],
	["white bread", "tomato", "white bread"]
), false)