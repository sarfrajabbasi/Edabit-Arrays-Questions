function incrementItems(Items){
    return  Items.map(x=> x + 1);
}
console.log(incrementItems([0, 1, 2, 3]), [1, 2, 3, 4])
console.log(incrementItems([2, 4, 6, 8]), [3, 5, 7, 9])
console.log(incrementItems([-1, -2, -3, -4]), [0, -1, -2, -3])