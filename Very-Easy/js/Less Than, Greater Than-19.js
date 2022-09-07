function arrBetween(num1,num2,arr){
let newArr = [];
for(var i = 0;i<=arr.length;i++){
    if((arr[i] > num1)&&(arr[i]<num2)){
        newArr.push(arr[i])
    }
}
return newArr;

}
// ***********************************
function arrBetween(num1,num2,arr){
return arr.filter(n=>n> num1 && n< num2);
}
// **************************************
function arrBetween(num1,num2,arr){
    let array = [];
    arr.forEach(el => {
        if(el>num1 && el<num2){
            array.push(el);
        }
    });
    return array;
}

console.log(arrBetween(7, 32, [1, 2, 3, 78]), [])
console.log(arrBetween(0, 9, [1, 2, 3, 78]), [1, 2, 3])
console.log(arrBetween(-5, 3, [-8, 0, 0, 20, -3]), [0, 0, -3])
console.log(arrBetween(1, 1, [1, 0, 3, 7]), [])
console.log(arrBetween(0, 310, [1, -2, 300, 78765, 100, 99, 98, 234]), [1, 300, 100, 99, 98, 234])