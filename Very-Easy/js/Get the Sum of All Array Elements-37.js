function getSumOfItems(arr) {
	
   return arr.reduce((x,y) => x + y ,0)
    
}

console.log(getSumOfItems([2, 7, 4]), 13)
console.log(getSumOfItems([45, 3, 0]), 48)
console.log(getSumOfItems([-2, 84, 23]), 105)
