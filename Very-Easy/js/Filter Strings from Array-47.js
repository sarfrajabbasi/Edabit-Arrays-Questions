function filterArray(arr) {
return arr.filter(x => Number.isInteger(x));

}
// ******************************************
function filterArray(arr){
    function removeString(a){
        if(typeof(a) === 'number' && a%1 == 0){
            return true;
        }else{
            return false
        }
    }
    return arr.filter(removeString);

}
console.log(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4])
console.log(filterArray(["A", 1, "&amp", 0, -9, "Edabit"]), [1, 0, -9])
console.log(filterArray(["Nothing", "here"]),[])
console.log(filterArray([1, 2, 3, 3.5 , "a", "b", 4 , 5.8 , 6]), [1, 2, 3, 4 , 6])